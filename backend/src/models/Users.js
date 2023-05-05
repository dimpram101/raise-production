import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: String,
  noHP: String,
  password: String,
  refreshToken: String,
});

const Users = model("user", userSchema);

export default Users;

