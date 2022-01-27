const Reservation = require("../models/Reservation");

const User = require("../models/User");

module.exports = {
    createRserv: (req, res) => {
        Reservation.create(req.body, (err, reservation) => {
          if (err) {
            res.status(500).json({
              message: "reservation not created " + err,
              data: null,
            });
          } else {
            User.findOneAndUpdate(
              { _id: req.body.client, __t: "client" },
              { $push: { reservation: reservation._id } },
              (error, user) => {
                if (error) {
                  res.status(500).json({
                    message: "reservation created  but not pushed in user  ",
                    data: null,
                  });
                } else {
                  res.status(200).json({
                    message: "reservation created and pushed in user  ",
                    data: null,
                  });
                }
              }
            );
          }
        });
      },
    
      getbyid: (req, res) => {
        Reservation.findById({ _id: req.params.id })
          .populate({
            path: "client",
          })
          .populate({
            path: "rooms",
            populate: {
              path: "category",
            },
          })
          .then((reservation) => {
            res.status(200).json({
              message: "reservation found ",
              data: reservation,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "reservation not found ",
              data: null,
            });
          });
      },
    
      getall: (req, res) => {
        Reservation.find({})
          .populate({
            path: "client",
          })
          .populate({
            path: "rooms",
            populate: {
              path: "category",
            },
          })
          .then((reservations) => {
            res.status(200).json({
              message: "reservations in system ",
              data: reservations,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "no reservations  from system ",
              data: null,
            });
          });
      },
    
      update: (req, res) => {
        Reservation.findByIdAndUpdate(
          { _id: req.params.id },
          { reserved: req.body.reserved },
          (err, reservation) => {
            if (err) {
              res.status(500).json({
                message: "reservation not updated " + err,
                data: null,
              });
            } else {
              Reservation.findById({ _id: req.params.id })
                .populate({ path: "client" })
                .populate({
                  path: "roms",
                  populate: {
                    path: "category",
                  },
                })
                .then((reservations) => {
                  res.status(200).json({
                    message: "reservations ",
                    data: reservations,
                  });
                  PopulateRes(reservations);
                })
                .catch((err) => {
                  res.status(500).json({
                    message: "error updateing",
                    data: null,
                  });
                });
            }
          }
        );
      },
    
      dateleREServation: (req, res) => {
        Reservation.findByIdAndDelete({ _id: req.params.id }, (err, reservation) => {
          if (err) {
            res.status(500).json({
              message: "error deleting reservation",
              data: null,
            });
          } else {
            res.status(200).json({
              message: "success deleting reservation",
              data: reservation,
            });
          }
        });
      },
    
      getreservbyclientid: (req, res) => {
    
        console.log('dfxgsg');
        Reservation.find({ client: req.user.id }, (err, reservations) => {
          console.log(reservations);
          if (err) {
            res.status(500).json({
              message : 'no reservations',
              data : []
            })
          } else {
            res.status(200).json({
              message:"user reservations",
              data: reservations,
            });
          }
        });
      },
    
    
    };




