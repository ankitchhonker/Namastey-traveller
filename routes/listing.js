const express = require("express");
const Listings = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/WrapAsync");
const { isLoggedIn, isOwner } = require("../middleware");
const listingController = require("../controller/listingController");
const multer  = require('multer');
const { storage} = require("../cloudConfig");
const upload = multer({storage});


const router = express.Router();

router.route("/")
.get(  wrapAsync(listingController.index))
 .post( upload.single('listing[image]'), wrapAsync(listingController.CreateListing));
 
// New listing route
router.get("/new", isLoggedIn, listingController.renderNewForm );
 
router.route("/:id")
.get(  wrapAsync(listingController.showListing))
.put( isLoggedIn, isOwner,upload.single('listing[image]'), wrapAsync(listingController.UpdateListing))
.delete(  isLoggedIn, wrapAsync(listingController.DeleteListing));


// Edit listing route
router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.renderEditForm));

 

 
module.exports = router;
