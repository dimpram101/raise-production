import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const saltRound = 10;
const genSalt = await bcrypt.genSalt(saltRound);

export const register = async (req, res) => {
  const {
    nama,
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
      nama,
      email,
      noHP,
      password: hashPassword,
      refreshToken: ""
    });

    return res.status(201).json({
      status: "SUCCESS",
      msg: "Berhasil membuat akun",
      payload: newUser
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      status: "ERROR",
      msg: "Gagal membuat akun",
      error
    })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({
    email
  })

  if (!user) {
    return res.status(403).json({
      status: "ERROR",
      msg: "Email atau Password salah!"
    });
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return res.status(401).json({
      status: "ERROR",
      msg: "Email atau Password salah!"
    });
  }

  const accessToken = jwt.sign({
    _id: user._id,
    role: user.role
  }, process.env.SECRET_KEY, {
    expiresIn: '30m',
  })

  const refreshToken = jwt.sign({
    _id: user._id,
    role: user.role
  }, process.env.SECRET_KEY, {
    expiresIn: '3d',
  })

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 15 * 60 * 1000,
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    status: "OK",
    msg: "Berhasil Login",
    payload: {
      accessToken
    }
  })
}


export const getUserData = async (req, res) => {
  try {
    const user = await Users.findOne({
      _id: req.userData._id
    });

    res.status(200).json({
      status: "OK",
      payload: user
    })
  } catch (error) {

  }
}