import { Schema, model } from "mongoose";

const statusSchema = new Schema({
  keterangan: String,
  tanggalUpdate: Schema.Types.Date
}, {_id: false});

const paymentSchema = new Schema({
  isPaid: Boolean,
  default: false,
  path: String,
}, {_id: false});

const projectSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  jumlah: Schema.Types.Number,
  kategori: {
    type: Schema.Types.String,
  },
  deadline: {
    type: Schema.Types.Date,
    required: true
  },
  link_komponen: {
    type: String
  },
  isPaid: [paymentSchema],
  status: [statusSchema],
  linkHasilAkhir: String,
  harga: String,
});

const ProjectVideos = model("project-videos", projectSchema);

export default ProjectVideos;

