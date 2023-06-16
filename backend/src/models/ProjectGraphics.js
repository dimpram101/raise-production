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
    type: Schema.Types.Array,
  },
  deskripsi: {
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
  status: [statusSchema],
  linkHasilAkhir: String,
  harga: String,
});

const ProjectGraphics = model("project-graphics", projectSchema);

export default ProjectGraphics;

