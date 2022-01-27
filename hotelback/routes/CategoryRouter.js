const express = require("express");

const route = express.Router();
const upload = require("../middlewares/upload");

const categoryController = require("../controllers/CategoryController");

const isauth = require("../middlewares/isAuth");

const isadmin = require("../middlewares/isAdmin");

/*
route.put("/:id",isauth, isadmin ,  categoryController.UpdateCategInfo);
route.put("/image/:id", upload.single("image"), categoryController.updateimage);
*/

//create categpory
route.post("/",isauth, isadmin , upload.single("icon"), categoryController.createcategory);

//update categ img
route.put("/image/:id",isauth, isadmin ,  upload.single("icon"), categoryController.updateimage);

//update categ info 

route.put("/:id",isauth, isadmin ,  categoryController.UpdateCategInfo);

// delete categ 
route.delete("/:id", isauth, isadmin , categoryController.deletecategory);
//geet categ byid 

route.get("/:id",  categoryController.getcategorybyid);

// get all categories

route.get("/", categoryController.getallcategories);






/*
route.delete("/:id", isauth, isadmin, categoryController.deletecategory);
route.get("/:id",  categoryController.getcategorybyid);
route.get("/",  categoryController.getallcategories);
*/

module.exports = route;