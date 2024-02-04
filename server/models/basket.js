const mongoose = require("mongoose");
const { Schema } = mongoose;

const basketSchema = new Schema({
  id: String,
  title: String,
  image: String,
  price: Number,
  rating: Number,
});

exports.schema = basketSchema;
