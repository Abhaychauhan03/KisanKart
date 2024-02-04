const userModel = require("../models/user");
const User = userModel.User;

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    const errors = error.response.data.errors;
    const message = Object.values(errors)[0].message;
    res.status(400).send({ message: message });
  }
};

exports.signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && user.email === email && user.password === password)
      res.status(200).send(user);
    else throw new Error("User not found");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndRemove(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.addOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    user.orders = req.body;
    user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
