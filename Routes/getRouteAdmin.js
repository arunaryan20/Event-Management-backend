const express=require("express")
const get_data_router=express.Router();
const verify=require("../Middleware/authMiddleware");
const getData = require("../Controller/getDataController");

get_data_router.get("/data",verify,getData)

module.exports=get_data_router