const mongoose = require("mongoose");
const User = require("../models/User");

const clientSchema = new mongoose.Schema({
  cin: {
    type: Number,
  },
  
  phone: {
    type: Number,
  },
  reservation: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reservation",
    },
  ],
});

module.exports = User.discriminator("client", clientSchema);

//
