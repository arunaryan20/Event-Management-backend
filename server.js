const express=require("express");
const app=express();
const cors=require("cors");
const dbConnect = require("./config");
const auth_router = require("./Routes/authRoutes");
const update_data = require("./Routes/updateRoutes");
const bodyParser=require("body-parser");
const get_data_router = require("./Routes/getRouteAdmin");


dbConnect();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())


app.use("/auth",auth_router)
app.use("/update",update_data)
app.use("/get",get_data_router)

app.listen(6500);