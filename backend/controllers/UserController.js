import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const respone = await User.findAll();
    res.status(200).json(respone);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersByid = async (req, res) => {
  try {
    const respone = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respone);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUsers = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Create" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUsers = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Update" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUsers = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Delet" });
  } catch (error) {
    console.log(error.message);
  }
};
