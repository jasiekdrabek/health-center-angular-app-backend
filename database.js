const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:CnY5kZTI81OJMkMs@cluster0.p0ijowp.mongodb.net/health-center-angular-app?retryWrites=true&w=majority",
      {}
    )
    .then(() => console.log("Connected to Mongodb......"));
};
