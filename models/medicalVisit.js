const mongoose = require("mongoose");
const User = require("../models/user");
const Prescription = require("../models/prescription");
const MedicalReferral = require("../models/medicalReferral");

const Schema = mongoose.Schema;

const medcalVisitSchema = new Schema(
  {
    patient: {
      type: User.schema,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: true,
    },
    prescription: {
      type: Prescription.schema,
      required: false,
    },
    medicalReferral: {
      type: MedicalReferral.schema,
      required: false,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedcalVisit", medcalVisitSchema);
