const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Medicine = require("./medicine");

const prescriptionSchema = new Schema(
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
    medicines: [{
      type: Medicine,
      require: true,
    }],
    date: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
