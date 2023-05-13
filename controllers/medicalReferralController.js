const MedicalReferral = require("../models/medicalReferral");

const getMedicalRefertal = async (req, res) => {
  try {
    const id = req.params.id;
    const medicalReferral = await MedicalReferral.findById(id);
    res.status(201).send(medicalReferral);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUserMedicalReferrals = async (req, res) => {
  try {
    const id = req.params.id;
    const medicalReferral = await MedicalReferral.find({
      patientId: id,
    });
    res.status(201).send(medicalReferral);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updaterMedicalReferral = async (req, res) => {
  try {
    const medicalReferral = new MedicalReferral({
      doctorId: req.body != undefined ? req.body.doctorId : req.query.doctorId,
      patientId:
        req.body != undefined ? req.body.patientId : req.query.patientId,
      code: req.body != undefined ? req.body.code : req.query.code,
      toWhichSpecialistDoctor:
        req.body != undefined
          ? req.body.toWhichSpecialistDoctor
          : req.query.toWhichSpecialistDoctor,
      date: req.body != undefined ? req.body.date : req.query.date,
    });
    await MedicalReferral.updateOne(
      { _id: req.body._id },
      {
        $set: {
          toWhichSpecialistDoctor: medicalReferral.toWhichSpecialistDoctor,
          code: medicalReferral.code,
        },
      }
    );
    res.satus(201).send(medicalReferral);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addMedicalReferral = async (req, res) => {
  try {
    const medicalReferral = new MedicalReferral({
      doctorId: req.body != undefined ? req.body.doctorId : req.query.doctorId,
      patientId:
        req.body != undefined ? req.body.patientId : req.query.patientId,
      code: req.body != undefined ? req.body.code : req.query.code,
      toWhichSpecialistDoctor:
        req.body != undefined
          ? req.body.toWhichSpecialistDoctor
          : req.query.toWhichSpecialistDoctor,
      date: req.body != undefined ? req.body.date : req.query.date,
    });
    await medicalReferral.save();
    res.status(201).send(medicalReferral);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteMedicalReferral = async (req, res) => {
  try {
    const id = req.params.id;
    const medicalReferral = await MedicalReferral.findByIdAndDelete(id);
    res.status(201).send(medicalReferral);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getMedicalRefertal,
  getUserMedicalReferrals,
  updaterMedicalReferral,
  addMedicalReferral,
  deleteMedicalReferral,
};
