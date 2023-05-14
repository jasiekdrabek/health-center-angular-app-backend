const express = require("express");
const router = express.Router();

const {
  auth,
  addUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

const { getAllMedicines } = require("../controllers/medicineController");

const {
  getUserMedicalReferrals,
} = require("../controllers/medicalReferralController");

const {
  getUserPrescriptions,
} = require("../controllers/prescriptionController");

const {
  addMedicalVisit,
  getMedicalVisits,
  getMadicalVisit,
  updateMedicalVisit,
} = require("../controllers/medicalVisitController");

router.post("/adduser", addUser);
router.get("/auth", auth);
router.delete("/deleteuser/:id", deleteUser);
router.get("/getallusers", getAllUsers);

router.get("/getallmedicines", getAllMedicines);

router.get("/getusermedicalreferrals/:id", getUserMedicalReferrals);

router.get("/getuserprescriptions/:id", getUserPrescriptions);

router.post("/addmedicalvisit", addMedicalVisit);
router.get("/getmedicalvisits", getMedicalVisits);
router.get("/getmadicalvisit/:id", getMadicalVisit);
router.put("/updatemedicalvisit", updateMedicalVisit);

module.exports = {
  routes: router,
};
