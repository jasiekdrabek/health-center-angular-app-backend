const User = require("../models/user");

const auth = async (req, res) => {
  try {
    const user = {
      login: req.user != undefined ? req.user.login : req.query.login,
      password: req.user != undefined ? req.user.password : req.query.password,
    };
    let findUser = await User.find({
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
      login: req.body != undefined ? req.body.login : req.query.login,
      password: req.body != undefined ? req.body.password : req.query.password,
      pesel: req.body != undefined ? req.body.pesel : req.query.pesel,
      name: req.body != undefined ? req.body.name : req.query.name,
      role: req.body != undefined ? req.body.role : req.query.role,
    });
    const allUsers = await User.find();
    const allLogin = allUsers.map((u) => u.login);
    if (!allLogin.includes(user.login)) {
      await user.save();
      res.status(201).send(user);
    } else {
      res.status(201).send([]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    await User.findByIdAndDelete(id).then((r) => {
      res.status(201).send(user);
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    let user = await User.find();
    if (req.query.role) {
      user = user.filter((u) => u.role == req.query.role);
    }
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
