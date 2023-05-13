const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medcalReferralSchema = new Schema(
  {
    doctorId: {
      type: String,
      require: true,
    },
    patientId: {
      type: String,
      require: true,
    },
    code: {
      type: Number,
      require: true,
    },
    toWhichSpecialistDoctor: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedcalReferral", medcalReferralSchema);
