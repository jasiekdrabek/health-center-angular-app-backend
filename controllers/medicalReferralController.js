const MedicalVisit = require("../models/medicalVisit");

const getUserMedicalReferrals = async (req, res) => {
  try {
    const id = req.params.id;
    const medicalVisits = await MedicalVisit.find({
      'medicalReferral.patientId': id,
    });
    const medicalReferrals = medicalVisits.map((v) => v.medicalReferral);
    res.status(201).send(medicalReferrals);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getUserMedicalReferrals,
};
