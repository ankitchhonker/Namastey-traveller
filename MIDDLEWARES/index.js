const express = require("express");
const app = express();
const expressError = require("./expresserror.js");
//  
 
app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
         
    }
    throw new expressError(401,"Access denied!");
    next();
});



app.get("/api",(req,res)=>{
    res.send("data");
});
app.get("/admin",(req,res)=>{
    throw new expressError(403,"Access to  admin to forbidden:");
})

app.get("/",(req,res)=>{
     res.send("hi i am root");
}
);
app.use((err,req,res,next)=>{
    let {status = 500,message="access denied!"} = err;
    res.status(status).send(message);
   
});



app.listen(8080, ()=>{
    console.log("server is lisining on port 8080:");
})