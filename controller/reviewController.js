const Review = require('../models/reveiws');
const Listing = require('../models/listing');

module.exports.createReview = async (req, res) => {
  let {id} = req.params;
  console.log(req.body.reviews);
    const listing = await Listing.findById(req.params.id);
    const review = new Review(req.body.reviews);
    
    review.author = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash('success', 'Review added successfully!');
    res.redirect(`/listings/${id}`);
};

module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review deleted successfully!');
    res.redirect(`/listings/${id}`);
};
