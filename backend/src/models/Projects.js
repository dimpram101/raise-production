import { Schema, model } from "mongoose";

const statusSchema = new Schema({
  keterangan: String,
  tanggalUpdate: Schema.Types.Date
}, {_id: false});

const projectSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  deskripsi: String,
  deadline: Schema.Types.Date,
  link_komponen: String,
  customize: Schema.Types.Array,
  status: [statusSchema],
  linkHasilAkhir: String
});

const Projects = model("project", projectSchema);

export default Projects;

