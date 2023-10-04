const mongoose=require("mongoose")

const updateProfileModel=new mongoose.Schema({
       image:{
        type:String,
        require:[true,"Please select an Image"]
       },
       name:{
        type:String,
        require:[true,"Please provide name"]
       },
       email:{
        type:String,
        require:[true,"Please provide email"]
       },
       phone:{
        type:String,
        require:[true,"Please provide phone number"]
       }
})

module.exports=mongoose.model("users",updateProfileModel)