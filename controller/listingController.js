const Listings = require("../models/listing");

module.exports.index = async (req, res) => {
    const alllistings = await Listings.find({});
    res.render("listing/index", { alllistings });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new");
}

module.exports.CreateListing=async (req, res, next) => {
     
    let url = req.file.path;
    let filename = req.file.filename;
    const newlisting = new Listings(req.body.listing);
    newlisting.owner = req.user;
    newlisting.image = {url,filename};
    await newlisting.save();
    req.flash("success", "Your listing has been added");
    res.redirect("/listings");
}
module.exports.showListing=async (req, res) => {
    const { id } = req.params;
    const listing = await Listings.findById(id).populate({path:"reviews",populate:{
   path:"author"
    }}).populate("owner");
    res.render("listing/show", { listing });
}

module.exports.renderEditForm=async (req, res) => {
    const { id } = req.params;
   
    const listing = await Listings.findById(id);
    res.render("listing/edit", { listing });
}

module.exports.UpdateListing = async (req, res) => {
    const { id } = req.params;
    const updateListing = await Listings.findByIdAndUpdate(id, { ...req.body.listing });
    if (req.file) {
        const url = req.file.path;
        const filename = req.file.filename;
        updateListing.image = {url,filename};
        await updateListing.save();
    }   
    req.flash("success", "Edit Finished");
    res.redirect("/listings");
}
module.exports.DeleteListing =async (req, res) => {
    const { id } = req.params;
    await Listings.findByIdAndDelete(id);
    req.flash("success", "Your listing has been deleted!");
    res.redirect("/listings");
} 