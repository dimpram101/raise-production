import express from "express";
import "../config/database.js";
import Users from "./models/Users.js";
import Projects from "./models/Projects.js";
import userRoute from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send("Hello");
});

app.get('/users', async (req, res) => {
  const user = new Users({
    username: "dimpram",
    noHP: "081289123",
    email: "dimas@gmail.com",
    password: "dimpram",
    refreshToken: ""
  })

  try {
    await user.save();
    return res.json(user);
  } catch (e) {
    return res.json(e);
  }
});

app.use("/user", userRoute);

// app.get('/projects', async(req, res) => {
//   const project = await Projects.create({
//     userId: "64550378ca3d3abefec73cc2",
//     deskripsi: "buatkan blablabla",
//     deadline: Date.now(),
//     link_komponen: "danwiodnaiowdn",
//     customize: ["Keren", "Motion Graphic"],
//     status: [{
//       keterangan: "aaaaaaaaaaaa",
//       tanggalUpdate: Date.now(),
//     }],
//     linkHasilAkhir: ""
//   });
//   res.json(project);
// })

// app.get('/projects/:userId', async (req, res) => {
//   const projects = await Projects.find({
//     userId: req.params.userId
//   });

//   res.json(projects);
// })

app.listen(5000, () => console.log(`Server running at http://localhost:5000`));