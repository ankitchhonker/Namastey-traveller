if(process.env.NODE_ENV != "PRODUCTION"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;  
const User = require("./models/user.js");
const userRoutes = require("./routes/user.js"); 
const Listings = require("./models/listing.js");  
const Reviews = require("./models/reveiws.js");
const wrapAsync = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema , reviewSchema } = require("./schema.js");
const listingRoutes = require("./routes/listing.js");  
const reviewRoutes = require("./routes/review.js");  
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { date } = require("joi");
 const Islogin = require("./middleware.js");

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL,{

    });
    console.log("Connection successful");
}
const store = MongoStore.create({
    mongoUrl:process.env.ATLASDB_URL,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});

store.on("error",()=>{
    console.log("some error occured in mongoose database");
}
)

const sessionOptions = {
       store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize()); 
app.use(passport.session());   

passport.use(new LocalStrategy(User.authenticate()));  
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.reqUser = req.user;
    next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));
main().catch((err) => {
    console.log(err);
});


//filter Route

app.get("/listings/category/:category",async(req,res)=>{
    
    let {category} = req.params;
    console.log(category);
    const alllistings = await Listings.find({category});
    res.render("listing/index.ejs",{alllistings});
     
});

app.get("/listings/search/:searchValue",async(req,res)=>{
    const searchTerm = req.query.searchTerm;
    const query = {
        $or: [
          { title: new RegExp(searchTerm, 'i') }, 
          { location: new RegExp(searchTerm, 'i') },  
          { country: new RegExp(searchTerm, 'i') },  
          { description: new RegExp(searchTerm, 'i') }  
        ]
      };
      try {
         
        const alllistings = await Listings.find(query);
        res.render("listing/index.ejs", { alllistings });
      } catch (error) {
        next(error);  
      }
    
})



// Route middlewares
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/", userRoutes);

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page Not found"));
})
// Global error handling middleware
app.use((err, req, res, next) => {
    let {statusCode=500, message="something went wrong"} = err;
    console.log(message);
    res.status(statusCode).render("error.ejs", { message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
