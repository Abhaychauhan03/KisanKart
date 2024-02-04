const mongoose = require("mongoose");
const basketSchema = require("./basket");
const { Schema } = mongoose;

const orderSchema = new Schema({
  id: String,
  basket: [basketSchema.schema],
  amount: Number,
  created: Date,
});

exports.schema = orderSchema;
