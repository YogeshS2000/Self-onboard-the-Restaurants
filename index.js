const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MongoDB connection
mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.r4naqly.mongodb.net/merchantDB?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("server is running at 4000");
    });

    console.log("connected to MongoDb");
  })
  .catch((error) => {
    console.log(error);
  });

//Database Schema
const MerchantSchema = new mongoose.Schema({
  restaurant_name: {
    type: String,
    required: true,
  },
  contact_name: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  phone_number: {
    type: Number,
    unique: true,
    required: true,
  },
  average_daily_transactions: {
    type: Number,
    required: true,
  },
});

const MerchantModel = mongoose.model("merchant", MerchantSchema);

//API GET
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//API POST
app.post(
  "/",
  [
    body("restaurant_name").notEmpty(),
    body("contact_name").notEmpty(),
    body("location").notEmpty(),
    body("pincode").matches(/^\d{6}$/),
    body("phone_number").matches(/^\d{10}$/),
    body("average_daily_transactions").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).sendFile(__dirname + "/error.html");
      return;
    }

    const newMerchant = new MerchantModel(req.body);

    newMerchant
      .save()
      .then(() => {
        res.sendFile(__dirname + "/sucess.html");
      })
      .catch((err) => {
        res.status(500).sendFile(__dirname + "/error.html");
      });
  }
);
