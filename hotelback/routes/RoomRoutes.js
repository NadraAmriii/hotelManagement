// http://localhost:5000/api

// /users/

// post, get, put , delete

// https://join.skype.com/JS2KDL5A0Xr2

const express = require("express");

const route = express.Router();

const RoomController = require("../controllers/RoomController");


const upload = require('../middlewares/upload')


const isauth = require("../middlewares/isAuth");

const isadmin = require("../middlewares/isAdmin");


//create user public route
route.post("/",isauth,isadmin, upload.single('image'), RoomController.create);
//update room information
route.put("/:id",isauth,isadmin, RoomController.updateroominfo);

//update room image 
route.put("/:id",upload.single('image'),isauth,isadmin, RoomController.updateimage);
//delete room
route.delete("/:id",isauth,isadmin, RoomController.deleteR);

// getroom by id 
route.get("/:id", RoomController.getRomById);
route.get("/", RoomController.getalllrooms);



module.exports = route;

// create admin et client => amin etcleint avec password crypted
// authenticate api users/login (admin,client)
//consomer delete user api