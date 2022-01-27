const express = require("express");

const route = express.Router();

const ReservationController = require("../controllers/ReservationController");
const isauth = require("../middlewares/isauth");

const isadmin = require("../middlewares/isAdmin");

//create reservation
route.post("/",isauth,  ReservationController.createRserv);

route.get("/client", isauth, ReservationController.getreservbyclientid);

route.get("/:id",isauth, ReservationController.getbyid);

route.get("/", isauth, isadmin, ReservationController.getall);

route.put("/:id", isauth, isadmin, ReservationController.update);
route.delete("/:id",isauth , isadmin, ReservationController.dateleREServation);


module.exports = route;