import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  noHP: String,
  password: String,
  refreshToken: String,
});

const User = model("user", userSchema);

export default User;

