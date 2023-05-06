import ProjectGraphics from "../models/ProjectGraphics.js";
import dotenv from "dotenv";
dotenv.config();

// Untuk Video
export const createProjectGraphic = async (req, res) => {
    const {
        kategori,
        deskripsi,
        genre,
        ukuran,
        color_pallete,
        referensi,
        deadline,
        link_komponen,
    } = req.body;

    try {
        const newProjectGraphic = await ProjectGraphics.create({
            userId: req.userData._id,
            kategori,
            deskripsi,
            genre,
            ukuran,
            color_pallete,
            referensi,
            deadline,
            link_komponen,
        });

        return res.status(201).json({
            status: "SUCCESS",
            msg: "Berhasil membuat permintaan projek graphic",
            payload: newProjectGraphic
        })
    } catch (error) {
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal membuat permintaan projek graphic",
            error
        })
    }
}

export const getProjectGraphic = async (req, res) => {
    try {
        const allGraphic = await ProjectGraphics.find();
        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil mendapat permintaan projek graphic",  
            payload: allGraphic      
        })
    } catch (error) {
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal mendapat permintaan projek graphic",
            error
        })
    }
}

export const getProjectGraphicByID = async (req, res) => {
    const { id } = req.params;
    try {
        const idGraphic = await ProjectGraphics.findOne({_id: id});
        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil mendapat permintaan projek graphic berdasar id",        
            payload: idGraphic
        })
    } catch (error) {
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal mendapat permintaan projek graphic berdasar id",
            error
        })
    }
}

export const getProjectGraphicByUserID = async (req, res) => {
    try {
        const userGraphic = await ProjectGraphics.find({userId: req.userData._id});
        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil mendapat permintaan projek graphic berdasar id",
            payload: userGraphic
        })
    } catch (error) {
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal mendapat permintaan projek graphic berdasar id",
            error
        })
    }
}

export const updateProjectGraphic = async (req, res) => {
    const { id } = req.params;
    
    const {
        newStatus
    } = req.body
    
    try {
        const idGraphic = await ProjectGraphics.findOne({_id: id});
        idGraphic.status.push({
            ...newStatus,
            tanggalUpdate: Date.now()
        });
        await idGraphic.save();

        return res.status(200).json({
            status: "SUCCESS",
            msg: "Berhasil update permintaan projek graphic berdasar id",
            payload: idGraphic
        })
    } catch (error){
        console.log(error);
        return res.status(400).json({
            status: "ERROR",
            msg: "Gagal update permintaan projek graphic berdasar id",
            error
        })
    }
}