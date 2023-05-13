const express = require("express");
const {
  auth,
  addUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");
const { getAllMedicines } = require("../controllers/medicineController");
const {
  getMedicalRefertal,
  getUserMedicalReferrals,
  updaterMedicalReferral,
  addMedicalReferral,
  deleteMedicalReferral,
} = require("../controllers/medicalReferralController");
const router = express.Router();

router.post("/adduser", addUser);
router.get("/auth", auth);
router.delete("/deleteuser/:id", deleteUser);
router.get("/getallusers", getAllUsers);

router.get("/getallmedicines", getAllMedicines);

router.get("getmedicalrefertal/:id", getMedicalRefertal);
router.get("getusermedicalreferrals/:id", getUserMedicalReferrals);
router.put("updatermedicalreferral", updaterMedicalReferral);
router.post("addmedicalreferral", addMedicalReferral);
router.delete("deletemedicalreferral/:id", deleteMedicalReferral);


module.exports = {
  routes: router,
};
