const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  activeSubstance: {
    type: String,
    require: true,
  },
  dose: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: false,
  },
});

module.exports = mongoose.model("Medicine", medicineSchema);
