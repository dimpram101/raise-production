import mailTransporter from "../../config/mail.js";
import ProjectVideos from "../models/ProjectVideos.js";
import dotenv from "dotenv";
import Users from "../models/Users.js";
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
    console.log(kustom)
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
    const { newStatus } = req.body
    
    try {
        const idVideo = await ProjectVideos.findOne({ _id: id });
        idVideo.status.push({
            ...newStatus,
            tanggalUpdate: Date.now()
        });
        await idVideo.save();

        const idUser = await Users.findOne({_id: idVideo.userId});
        await mailTransporter.sendMail({
            from: "raiseproduction123@gmail.com",
            to: idUser.email,
            subject: `Informasi update project dengan ID ${idVideo.id}`,
            text: `Project anda sedang ditahap ${newStatus}`
        })

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

export const insertPayment = async (req, res) => {
    const { id } = req.params;

    const file = req.file;

    try {
        const idVideo = await ProjectVideos.findOne({ _id: id });
        idVideo.payment = {
            isPaid: true,
            path: file.path
        };

        idVideo.save();
    }
    catch (error) {
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal melakukan pembayaran berdasar id",
            error
        })
    }
}