import { Schema, model } from "mongoose";

const statusSchema = new Schema({
  keterangan: Schema.Types.String,
  tanggalUpdate: Schema.Types.Date
}, {_id: false});

const paymentSchema = new Schema({
  isPaid: {type: Schema.Types.Boolean, default: false},
  path: {type: Schema.Types.String, default: ""},
}, {_id: false});

const projectSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  kategori: {
    type: Schema.Types.String,
  },
  deskripsi: {
    type: Schema.Types.String,
    required: true,
  },
  kustom: [customizeSchema],
  deadline: {
    type: Schema.Types.Date,
    required: true
  },
  link_komponen: {
    type: Schema.Types.String
  },
  payment: {type: paymentSchema, default: {isPaid: false, path: ""}},
  status: [statusSchema],
  linkHasilAkhir: Schema.Types.String,
  harga: Schema.Types.String,
});

const ProjectVideos = model("project-videos", projectSchema);

export default ProjectVideos;

