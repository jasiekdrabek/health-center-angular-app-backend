const MedicalVisit = require("../models/medicalVisit");

const getUserPrescriptions = async (req, res) => {
  try {
    const id = req.params.id;
    const medicalVisits = await MedicalVisit.find({
      'prescription.patientId': id,
    });
    const prescriptions = medicalVisits.map((v) => v.prescription);
    res.status(201).send(prescriptions);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  getUserPrescriptions,
};
