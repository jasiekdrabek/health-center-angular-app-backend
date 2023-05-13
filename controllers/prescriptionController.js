const Prescription = require("../models/prescription");

const getUserPrescriptions = async (req, res) => {
    try {
        const id = req.params.id;
        const prescription = await Prescription.find({
          patientId: id,
        });
        res.status(201).send(prescription);
      } catch (error) {
        res.status(400).send(error.message);
      }
};

const updatePrescription = async (req, res) => {
    try {
        const prescription = new Prescription({
          doctorId: req.body != undefined ? req.body.doctorId : req.query.doctorId,
          patientId:
            req.body != undefined ? req.body.patientId : req.query.patientId,
          code: req.body != undefined ? req.body.code : req.query.code,
          medicines:
            req.body != undefined
              ? req.body.medicines
              : req.query.medicines,
          date: req.body != undefined ? req.body.date : req.query.date,
        });
        await Prescription.updateOne(
          { _id: req.body._id },
          {
            $set: {
              toWhichSpecialistDoctor: prescription.medicines,
              code: prescription.code,
            },
          }
        );
        res.satus(201).send(prescription);
      } catch (error) {
        res.status(400).send(error.message);
      }
};

const addPrescription = async (req, res) => {
    try {
        const prescription = new Prescription({
          doctorId: req.body != undefined ? req.body.doctorId : req.query.doctorId,
          patientId:
            req.body != undefined ? req.body.patientId : req.query.patientId,
          code: req.body != undefined ? req.body.code : req.query.code,
          medicines:
            req.body != undefined
              ? req.body.medicines
              : req.query.medicines,
          date: req.body != undefined ? req.body.date : req.query.date,
        });
        await prescription.save();
        res.status(201).send(prescription);
      } catch (error) {
        res.status(400).send(error.message);
      }
};

const deletePrescription = async (req, res) => {
    try {
        const id = req.params.id;
        const prescription = await Prescription.findByIdAndDelete(id);
        res.status(201).send(prescription);
      } catch (error) {
        res.status(400).send(error.message);
      }
};

module.exports = {
  getUserPrescriptions,
  updatePrescription,
  addPrescription,
  deletePrescription,
};
