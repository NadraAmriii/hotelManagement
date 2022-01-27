const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    Arrivaldate : {
        type : Date,

    },
    DeparDate :{
        type : Date,
    },
    nbPersons :{
        type : Number,
    },
    nbRooms :{
        type : Number,
    },
    total_price: {
        type: Number,
        required: true,
      },
    reserved : {
        type: Number,
        default :1
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rooms: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Rom",
        },
      ],


    }
,{ timestamps: true }

);
module.exports = mongoose.model("reservation", reservationSchema);
