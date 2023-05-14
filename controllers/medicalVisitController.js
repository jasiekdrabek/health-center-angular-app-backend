const MedicalVisit = require("../models/medicalVisit");

const addMedicalVisit = async (req, res) => {
  try {
    const medicalVisit = new MedicalVisit({
      patient: req.body != undefined ? req.body.patient : req.query.patient,
      doctorId: req.body != undefined ? req.body.doctorId : req.query.doctorId,
      details: req.body != undefined ? req.body.details : req.query.details,
      date: req.body != undefined ? req.body.date : req.query.date,
      prescription:
        req.body != undefined ? req.body.prescription : req.query.prescription,
      medicalReferral:
        req.body != undefined
          ? req.body.medicalReferral
          : req.query.medicalReferral,
      status: req.body != undefined ? req.body.status : req.query.status,
    });
    await medicalVisit.save();
    res.status(201).send(medicalVisit);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getMedicalVisits = async (req, res) => {
  try {
    let medicalVisit = await MedicalVisit.find({
      doctorId: req.query.doctorId,
      status: req.query.status,
    });
    if (req.query.date) {
      medicalVisit = medicalVisit.filter((u) => u.date == req.query.date);
    }
    res.status(201).send(medicalVisit);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getMadicalVisit = async (req, res) => {
  try {
    const id = req.params.id;
    const medicalVisit = await MedicalVisit.findById(id);
    res.status(201).send(medicalVisit);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updateMedicalVisit = async (req, res) => {
  try {
    const medicalVisit = new MedicalVisit({
      patient: req.body != undefined ? req.body.patient : req.query.patient,
      doctorId: req.body != undefined ? req.body.doctorId : req.query.doctorId,
      details: req.body != undefined ? req.body.details : req.query.details,
      date: req.body != undefined ? req.body.date : req.query.date,
      prescription:
        req.body != undefined ? req.body.prescription : req.query.prescription,
      medicalReferral:
        req.body != undefined
          ? req.body.medicalReferral
          : req.query.medicalReferral,
      status: req.body != undefined ? req.body.status : req.query.status,
    });
    await MedicalVisit.updateOne(
      { _id: req.body != undefined ? req.body._id : req.query.id},
      {
        $set: {
          details: medicalVisit.details,
          prescription: medicalVisit.prescription,
          medicalReferral: medicalVisit.medicalReferral,
          status: medicalVisit.status,
        },
      });
      if(!medicalVisit.medicalReferral){
        await MedicalVisit.updateOne(
          { _id: req.body != undefined ? req.body._id : req.query.id},
          {
            $unset: {              
              medicalReferral:1
            },
          });
      }
      if(medicalVisit.prescription?.medicines.length == 0){
        await MedicalVisit.updateOne(
          { _id: req.body != undefined ? req.body._id : req.query.id},
          {
            $unset: {              
              prescription:1
            },
          });
      }
    res.status(201).send(medicalVisit);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

module.exports = {
  addMedicalVisit,
  getMedicalVisits,
  getMadicalVisit,
  updateMedicalVisit,
};
