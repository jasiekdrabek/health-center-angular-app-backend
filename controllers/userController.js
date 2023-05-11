const User = require("../models/user");

const auth = async (req, res) => {
  try {
    const user = new User({
      login: req.user != undefined ? req.user.login : req.query.login,
      password: req.user != undefined ? req.user.password : req.query.password,
    });
    const findUser = await User.find({
      login: user.login,
      password: user.password,
    });
    res.status(201).send(findUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const user = new User({
      login: req.user != undefined ? req.user.login : req.query.login,
      password: req.user != undefined ? req.user.password : req.query.password,
      pesel: req.user != undefined ? req.user.pesel : req.query.pesel,
      roleId: req.user != undefined ? req.user.roleId : req.query.roleId,
    });
    const allUsers = await User.find();
    const allLogin = allUsers.map((u) => u.login);
    if (!(user.login in allLogin)) {
      await user.save();
      res.status(201).send("user added");
    } else {
      res.status(201).send("this user already exist");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.user != undefined ? req.user.id : req.query.id;
    await User.findByIdAndDelete(id);
    res.status(201).send("user deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  auth,
  deleteUser,
  addUser,
  getAllUsers,
};
