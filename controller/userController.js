const User = require("../models/user");
const passport = require("passport");

module.exports.renderSignUpform = (req,res)=>{
    res.render("user/signup.ejs");
}

module.exports.signUp = async(req,res)=>{
 
    try{
      let {username,email,password} = req.body;
      const newUser = new User({username,email});
    const regesteredUser = await User.register(newUser,password); 
    req.login(regesteredUser,(err)=>{
      if(err)
          {
            return  next(err);
          }
          req.flash("success","Account Created successfuly");
           
    res.redirect("/listings");
    })
   
    } catch(err){
      req.flash("error",`${err}`);
   
    }
  }

  module.exports.renderLoginForm = (req,res)=>{
    res.render("user/login.ejs");
}

  module.exports.login =   async(req, res) => {
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);  // Redirect to the desired route after login
}


module.exports.logout = (req,res,next)=>{
    req.logOut((err)=>{
        if(err)
            {
                next(err);
            }
            req.flash("success","you have been logout");
            res.redirect("/listings");
    })
}