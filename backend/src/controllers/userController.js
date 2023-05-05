import Users from "../models/Users.js";
import bcrypt from "bcrypt";

const saltRound = 10;
const genSalt = await bcrypt.genSalt(saltRound);

const register = async (req, res) => {
  const {
    username,
    email,
    noHP,
    password,
    confirmPassword
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(401).json({
      status: "ERROR",
      msg: "Password tidak cocok dengan Konfirmasi Password!"
    });
  }

  try {
    const hashPassword = await bcrypt.hash(password, genSalt);

    const newUser = await Users.create({
      username,
      email,
      noHP,
      password: hashPassword,
      refreshToken: ""
    });

    return res.status(201).json({
      status: "SUCCESS",
      msg: "Berhasil membuat akun",
      data: newUser
    })
  } catch (error) {
    return res.status(400).json({
      status: "ERROR",
      msg: "Gagal membuat akun",
      error
    })
  }
}

export {
  register
};