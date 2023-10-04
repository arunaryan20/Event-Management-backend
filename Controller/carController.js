const jwt=require("jsonwebtoken")
const carSchema=require("../Models/carModel")
const registerCar=async(req,res)=>{
       try{
        const {totalCar,bookingDate}=req.body;
        if(!totalCar || !bookingDate){
            res.status(400).json({success:false,message:"All fields are required"})
        }else{
            const {totalCar,bookingDate}=req.body;
            if(!totalCar || !bookingDate){
                res.status(400).json({success:false,message:"All fields are required"})
            }else{
                jwt.verify(req.token, 'secretkey', async function(err, authData) {
                   req.body.createdBy=authData.data._id;
                   const save_car=await carSchema.create(req.body)
                   req.status(201).json({success:true,message:"car data created successfully",data:save_car})
                  });         
            }          
        }
       }catch(error){
        res.status(404).json({success:false,message:"register car controller error",error:error})
       }
}

const updateBooking=async(req,res)=>{

}

const updateTotalCar=async(req,res)=>{

}

module.exports={
    registerCar,
    updateBooking,
    updateTotalCar
}