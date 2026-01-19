const mongoose=require('mongoose');
const connectDB=async()=>{
await mongoose.connect(
    "mongodb+srv://pradeep:1ddmKDTqjmvFrBK9@nodex.v3g24wv.mongodb.net/meetDev"
);
};
module.exports=connectDB;