const Category = require("../models/Category");

module.exports = {
  createcategory: (req, res) => {
    let data = {
      name: req.body.name,
      icon: req.file.filename,
    };
    Category.create(data, (err, category) => {
      if (err) {
        res.status(500).json({
          message: "category not created " + err,
          data: null,
        });
      } else {
        res.status(201).json({
          message: "category  created ",
          data: category,
        });
      }
    });
  },

  getallcategories: (req, res) => {
    Category.find({}, (err, categories) => {
      if (!categories) {
        res.status(500).json({
          message: "no categories " + err,
          data: null,
        });
      } else {
        res.status(200).json({
          message: "categories in system",
          data: categories,
        });
      }
    });
  },

  
  updateimage: (req, res) => {
    const data = {
      icon: req.file.filename,
    };

    Category.findByIdAndUpdate({ _id: req.params.id }, data, (err, category) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "error updating category",
        });
      } else {
        res.status(200).json({
          message: "succesfuly updating category",
        });
      }
    });
  },


  UpdateCategInfo : (req , res) => {
    Category.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, category) => {
      if (err) {
        res.status(500).json({
          message: "error updating category"+err,
        });
      } else {
        res.status(200).json({
          message: "succesfuly updating category",
         
        });
      }
    });
  },


  deletecategory: (req, res) => {
    Category.findByIdAndDelete({ _id: req.params.id }, (err, category) => {
      if (err) {
        res.status(500).json({
          message: " catgory not deleted" + err,
          data: null,
        });
      } else {
        res.status(200).json({
          message: "category deleted successfuly",
          data: category,
        });
      }
    });
  },

  getcategorybyid: (req, res) => {
    Category.findById({ _id: req.params.id }, (err, category) => {
      if (err) {
        res.status(500).json({
          message: " catgory not found " + err,
          data: null,
        });
      } else {
        res.status(200).json({
          message: "category found",
          data: category,
        });
      }
    });
  },
};