const express = require('express');
const connectDB=require("./config/database");
const app = express();
const User=require("./models/user");
app.use(express.json());

app.post("/signup",async (req,res)=>{
    console.log("SIGNUP ROUTE HIT");
    const user=new User(req.body);
    try{
    await user.save();
    } catch(err){
    res.send("User added successfully");
    }
})


connectDB()
.then(()=>{
console.log("Database connection estbalised");
app.listen(3000, () => {
    console.log("Server started running 3000");
});
})
.catch(err=>{
console.log("Database cannot be connected");
});
