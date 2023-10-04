const multer = require('multer')
const authModel = require('../Models/authModel')
const jwt = require('jsonwebtoken')

const myprofileUpdate = async (req, res) => {
  try {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
      res
        .status(400)
        .json({ success: false, message: 'All the fields are required' })
    } else { 
      jwt.verify(req.token,"secretkey",async(err,authData)=>{
        if(err){
         res .status(400)
          .json({ success: false, message: 'Invalid token' })
        }else{
          const fileNames = req.files.map(file => file.originalname);
             var user=await authModel.findOne({email:authData.data.email})
             if(user){
              user.name=name
             user.email=email
             user.phone=phone
             user.image=fileNames[0]
             console.log("user image---->",user.image)
           const updated_data= await user.save()
               res.status(200).json({success:true,message:"data updated",data:updated_data})
             }else{
              res.status(200).json({success:true,message:"User not found"})
             }
        }
      })
    }
  } catch (err) {
    res
      .status(404)
      .json({ success: false, message: 'My Profile update controller error' })
  }
}
module.exports = myprofileUpdate
