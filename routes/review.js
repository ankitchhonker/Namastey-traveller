const express = require("express");
const router = express.Router( {mergeParams :true} );
const Listings = require("../models/listing.js");  
const wrapAsync = require("../utils/WrapAsync");
const ExpressError = require("../utils/ExpressError.js"); 
const { isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController = require("../controller/reviewController.js");
const {validateReviews} = require("../middleware.js");  

//create Reviews
router.post("/",isLoggedIn, validateReviews, wrapAsync(reviewController.createReview));
//review delete 
router.delete("/:reviewId",isLoggedIn,isAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
