const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
//==========REGISTER USER===========
//POST : api/users/register

const httpError = require("../models/errorModel");

//UNPROTECTED
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password ) {
      return next(new httpError("please provide all", 422));
    }
    const newEmail = email.toLowerCase();
    const emailExists = await User.findOne({ email: newEmail });

    if (emailExists) {
      return next(new httpError("email already exists", 422));
    }
    if ((password.trim()).length < 6) {
        // console.log("password must be at least 6 characters");
      return next(new httpError("password must be at least 6 characters", 422));
    }
    if (password != confirmPassword) {
      return next(new httpError("passwords do not match", 422));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPassword
    });
    res.status(201).json(newUser);
  } catch (error) {
    // return next(new httpError("something went wrong", 500))
    return next(new httpError("something went wrong!", 422));
  }
};

//==========REGISTER USER===========
//POST : api/users/login
//UNPROTECTED
const loginUser = async (req, res, next) => {
  res.json("login user");
};

//==========USER PROFILE===========
//POST : api/users/:id
//PROTECTED
const getUser = async (req, res, next) => {
  res.json("user profile");
};

//==========CHANGE AVATAR===========
//POST : api/users/change-avatar
//PROTECTED
const changeAvatar = async (req, res, next) => {
  res.json("change avatar");
};

//==========EDIT USER DATA===========
//POST : api/users/edit-user
//PROTECTED
const editUser = async (req, res, next) => {
  res.json("edit user");
};

//==========GET ALL USERS===========
//POST : api/users/authors
//UNPROTECTED
const getAuthors = async (req, res, next) => {
  res.json("get authors");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors
};
