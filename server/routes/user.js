const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router
  .post("/", userController.createUser)
  .post("/signIn", userController.signInUser)
  .post("/order/:id", userController.addOrder)
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
