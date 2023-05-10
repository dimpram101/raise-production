import ProjectVideos from "../models/ProjectVideos.js";
import dotenv from "dotenv";
dotenv.config();

// Untuk Video
export const createProjectVideo = async (req, res) => {
    const {
        kategori,
        deskripsi,
        kustom,
        deadline,
        link_referensi
    } = req.body;
    console.log(kategori, link_referensi)
    try {
        const newProjectVideo = await ProjectVideos.create({
            userId: req.userData._id,
            kategori,
            deskripsi,
            kustom,
            deadline,
            link_referensi
        });

        return res.status(201).json({
            status: "SUCCESS",
            msg: "Berhasil membuat permintaan projek video",
            payload: newProjectVideo
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal membuat permintaan projek video",
            error
        })
    }
}

export const getProjectVideo = async (req, res) => {
    try {
        const allVideo = await ProjectVideos.find();
        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil mendapat permintaan projek video",
            payload: allVideo
        })
    } catch {
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal mendapat permintaan projek video",
            error
        })
    }
}

export const getProjectVideoByID = async (req, res) => {
    const { id } = req.params;
    try {
        const idVideo = await ProjectVideos.findOne({ _id: id });
        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil mendapat permintaan projek video berdasar id",
            payload: idVideo
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal mendapat permintaan projek video berdasar id",
            error
        })
    }
}

export const getProjectVideoByUserID = async (req, res) => {
    try {
        const userVideo = await ProjectVideos.find({ userId: req.userData._id });
        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil mendapat permintaan projek video berdasar id",
            payload: userVideo
        })
    } catch (error) {
        console.log(user);
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal mendapat permintaan projek video berdasar id",
            error
        })
    }
}

export const updateProjectVideo = async (req, res) => {
    const { id } = req.params;
    const {
        newStatus,
        harga
    } = req.body

    try {
        const idVideo = await ProjectVideos.findOne({ _id: id });
        idVideo.status.push({
            keterangan: newStatus,
            tanggalUpdate: Date.now()
        });
        if (harga) idVideo.harga = harga;
        await idVideo.save();

        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil update permintaan projek video berdasar id",
            payload: idVideo
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal update permintaan projek video berdasar id",
            error
        })
    }
}