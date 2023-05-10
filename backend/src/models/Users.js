import { Schema, model } from "mongoose";

const userSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Harap isikan email yang benar!']
  },
  noHP: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

const Users = model("user", userSchema);

export default Users;

