const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = require("./order");

const userSchema = new Schema({
  name: { type: String, required: [true, "name is required!"] },
  email: {
    type: String,
    required: [true, "email is required!"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (email) => `${email.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    minLength: [8, "Password is too short!"],
    required: true,
  },
  orders: [orderSchema.schema],
});

exports.User = mongoose.model("user", userSchema);
