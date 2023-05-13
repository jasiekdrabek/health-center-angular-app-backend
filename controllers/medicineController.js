const Medicine = require("../models/medicine");

const getAllMedicines = async (req, res) => {
  try {
    let medicine = await Medicine.find();
    res.send(medicine);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getAllMedicines };
