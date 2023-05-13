const express = require("express");
const {
  auth,
  addUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");
const { getAllMedicines } = require("../controllers/medicineController");
const router = express.Router();

router.post("/adduser", addUser);
router.get("/auth", auth);
router.delete("/deleteuser/:id", deleteUser);
router.get("/getallusers", getAllUsers);
router.get("/getallmedicines", getAllMedicines);

module.exports = {
  routes: router,
};
