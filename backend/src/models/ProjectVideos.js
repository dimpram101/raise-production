import { Schema, model } from "mongoose";

const statusSchema = new Schema({
  keterangan: String,
  tanggalUpdate: Schema.Types.Date
}, {_id: false});

const customizeSchema = new Schema({
  jenis: Schema.Types.String,
  jumlah: Schema.Types.String,
  harga: Schema.Types.String,
}, {_id: false})

const projectSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  kategori: {
    type: Schema.Types.String,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  kustom: [customizeSchema],
  deadline: {
    type: Schema.Types.Date,
    required: true
  },
  link_komponen: {
    type: String
  },
  status: [statusSchema],
  linkHasilAkhir: String,
  harga: String,
});

const ProjectVideos = model("project-videos", projectSchema);

export default ProjectVideos;

