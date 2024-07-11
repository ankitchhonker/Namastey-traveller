const { listingSchema, reviewSchema } = require("./schema.js");
const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError");
const reveiws = require("./models/reveiws.js");

module.exports.isLoggedIn = function(req, res, next) {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirect = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!res.locals.reqUser || !res.locals.reqUser._id.equals(listing.owner._id)) {
        req.flash("error", "You don't have permission to do this");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        const details = error.details || [];
        const msgError = details.map(el => el.message).join(',');
        throw new ExpressError(500, msgError);
    } else {
        next();
    }
};

module.exports.validateReviews = (req, res, next) => {
    console.log(req.body);
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        const details = error.details || [];
        const msgError = details.map(el => el.message).join(',');
        throw new ExpressError(500, msgError);
    } else {
        next();
    }
};

module.exports.isAuthor = async (req, res, next) => {
    let {id, reviewId } = req.params;
    const review = await  reveiws.findById(reviewId);
    if (!review.author.equals(res.locals.reqUser._id)) {
        req.flash("error", "You don't have permission to do this");
        return res.redirect(`/listings/${id}`);
    }
    next();
}