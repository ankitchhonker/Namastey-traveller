 const express = require("express");
 const router = express.Router();
 const User = require("../models/user");
const WrapAsync = require("../utils/WrapAsync");
const passport = require("passport");
const {saveRedirect} = require("../middleware.js");
 const userController = require("../controller/userController.js");

 router.route("/signUp")
 .get( userController.renderSignUpform)
 .post(  WrapAsync(userController.signUp));

 router.route("/login")
 .get( userController.renderLoginForm)
 .post( saveRedirect, passport.authenticate("local", {
  failureFlash: true,
  failureRedirect: '/login'
}), userController.login);

 
  router.get("/logout",userController.logout);

module.exports = router;