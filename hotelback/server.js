const express = require("express");

const app = express();
const db = require('./config/database')
const cors = require('cors')




app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());


app.use(cors())

//child routes

const roomrouter = require("./routes/RoomRoutes");
const categoryrouter = require("./routes/CategoryRouter");
const userrouter = require("./routes/UserRouter");
const adminrouter = require("./routes/AdminRouter");
const clientrouter = require("./routes/ClientRouter");
const reservationrouter = require("./routes/ReservationRouter");
const romrouter = require("./routes/RomRoutes");


//parent routes
app.use("/rooms",roomrouter);
app.use("/roms",romrouter);
app.use("/categories",categoryrouter);
app.use("/users",userrouter);
app.use("/admins",adminrouter);
app.use("/clients",clientrouter);
app.use("/reservations",reservationrouter);


app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/hello/:name", (req, res) => {
  res.send("hello" + req.params.name);
});

app.get("/getfile/:image", function (req, res) {
  res.sendFile(__dirname + "/uploads/" + req.params.image);
});


app.listen(5000, () => {
  console.log("server is runing on port 5000");
});
