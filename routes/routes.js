const express = require("express");
const {
  auth,
  addUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");
const router = express.Router();

router.post("/adduser", addUser);
router.get("/auth", auth);
router.delete("deleteuser/:id", deleteUser);
router.get("/getAllUsers", getAllUsers);

module.exports = {
  routes: router,
};
