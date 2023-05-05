import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB_URL).then(() => console.log("connected"));
// mongoose.connect('mongodb+srv://dimas:Dimas1234567890@cluster0.0t1weaq.mongodb.net/raise-production?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
// }).then(() => console.log("connected"));

const db = mongoose.connection;

export default db;