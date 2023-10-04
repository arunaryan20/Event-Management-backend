const express=require("express");
const update_data=express.Router();
const verify=require("../Middleware/authMiddleware");
const update_controller= require("../Controller/updateController");
const myprofileUpdate = require("../Controller/updateMyProfileController");
const upload=require("../Middleware/imageUploadMiddleware")

update_data.patch("/update-myprofile",upload,verify,myprofileUpdate)

update_data.patch("/decoration",upload,verify,update_controller.decorationController)
update_data.patch("/djSound",upload,verify,update_controller.djSoundController);
update_data.patch("/marriegeHall",upload,verify,update_controller.marriegeHallController);
update_data.patch("/car",upload,verify,update_controller.carController);
update_data.patch("/photographer",upload,verify,update_controller.photographerController);



module.exports=update_data;