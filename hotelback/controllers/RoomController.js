
const Room = require("../models/Room");


module.exports = {
  create: (req, res) => {
    console.log(req.body);
    let data = {
        nbRomm: req.body.nbRomm,
      price: req.body.price,
      capacity: req.body.capacity,
      description: req.body.description,
      category: req.body.category,
      image: req.file.filename,
     
    };

    Room.create(data, (err, room) => {
      if (err) {
        res.status(500).json({
          message: "room not created " + err,
          data: null,
        });
      } else {
        res.status(201).json({
          message: "room created successfuly ",
          data: room,
        });
      }
    });
  },

  deleteR: (req, res) => {
    Room.findByIdAndDelete({ _id: req.params.id }, (err, room) => {
      if (!room) {
        res.status(500).json({
          message: "room not exist " + err,
          data: null,
        });
      } else {
        res.status(201).json({
          message: "room deleted successfuly ",
          data: room,
        });
      }
    });
  },

  getRomById: (req, res) => {
    Room.findById({ _id: req.params.id })
      .populate({
        path: "category",
      })
      .then((room) => {
        res.status(201).json({
          message: "room found ",
          data: room,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "room not found ",
          data: null,
        });
      });
  },

  getalllrooms: (req, res) => {
    Room.find({})
      .populate({
        path: "category",
      })
      .then((rooms) => {
        res.status(201).json({
          message: "room in system ",
          data: rooms,
          
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "no such room in system",
          data: null,
        });
      });
  },

  updateimage: (req, res) => {
    const data = {
      image: req.file.filename,
    };

    Room.findByIdAndUpdate({ _id: req.params.id }, data, (err, room) => {
      if (err) {
        res.status(500).json({
          message: "error updating room",
        });
      } else {
        res.status(200).json({
          message: "succesfuly updating room",
        });
      }
    });
  },


  updateroominfo : (req , res) => {
    Room.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, room) => {
      if (err) {
        res.status(500).json({
          message: "error updating room",
        });
      } else {
        res.status(200).json({
          message: "succesfuly updating room",
        });
      }
    });
  }
};
