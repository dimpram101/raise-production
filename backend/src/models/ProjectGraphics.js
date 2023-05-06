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
  kategori: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  ukuran: {
    type: String,
    required: true,
  },
  color_pallete: {
    type: String,
    required: true,
  },
  referensi: {
    type: String,
    required: true,
  },
  deadline: {
    type: Schema.Types.Date,
    required: true
  },
  link_komponen: {
    type: String,
    required: true,
  },
  customize: Schema.Types.Array,
  status: [statusSchema],
  linkHasilAkhir: String,
  harga: Schema.Types.Number,
});

const Projects = model("project", projectSchema);

export default Projects;

