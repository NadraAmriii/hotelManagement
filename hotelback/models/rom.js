const mongoose = require("mongoose")

const RomSchema = new mongoose.Schema({
    nbRomm : {
        type: Number,
        required : true,
    },
    price : {
        type:Number,
        required : true,
    },

    description : {
        type : String,
        required : true,
    },
    capacity : {
        type : Number,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },



});
module.exports = mongoose.model("Rom", RomSchema);