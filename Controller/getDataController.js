const eventModel=require("../Models/authModel")
const jwt=require("jsonwebtoken")
const getData=async(req,res)=>{
      try{
          jwt.verify(req.token,"secretkey",async(err,authData)=>{
             if(err){
                res.status(400).json({success:false,message:"token verification error"})
             }else{
                const data= await eventModel.findOne({email:authData.data.email})
                if(data){
                    res.status(200).json({success:true,message:"Your data", data:data,token:req.token}) 
                }else{
                    res.status(400).json({success:false,message:"data not found"})
                }
             }
          })   
      }catch(err){
        res.status(404).json({success:false,message:"get data controller admin error"})
      }
}

module.exports=getData