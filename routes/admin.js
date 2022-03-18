const express = require('express')
const { Op } = require('sequelize')
const Donor = require("../models/donor")
const Article = require("../models/article")
const Crimson = require("../models/crimson")
const router = express.Router();
const fs = require('fs');
const multer = require('multer')
const path = require('path')

try {
    fs.readdirSync('uploads');
} catch (error) {
    console.error("uploasd 폴더가 없어서 uploads 폴더를 생성합니다.")
    fs.mkdirSync("uploads");
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            let url;
            console.log(req.path.split('/')[2])
            done(null, 'uploads')
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            // console.log(path.basename(file.originalname, ext) + Date.now() + ext)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    })

})

router.post('/donor/:clubId', upload.fields([{ name: 'logo' }]), async (req, res) => {
    console.log(req.files, req.body)
    const clubId = req.params.clubId
    const { name, role, belong, position } = req.body
    return res.json({
        code: 200
    })
    switch (clubId) {
        case '1':
        case '2':
        case "3":
            console.log('복잡한 입력값들')
            break;
        case '4':
        case '5':
        case '6':
            console.log('덜 복잡한 입력값들')
            break;
        case '7':
        case '8':
            try {
                const newDonor = await Donor.create({
                    name,
                    role,
                    belong,
                    position,
                    club: clubId
                })
                return res.json({
                    success: true,
                    message: "기부자가 성공적으로 등록되었습니다.",
                    data: newDonor
                })

            } catch (error) {
                return res.status(400).json({
                    code: false,
                    error
                })
            }
            break;
        case '9':
            console.log('크림슨 클럽');
            break;
        default:
            console.log('something worng')
            break;
    }

    return res.json({
        success: true,
        message: "기부자가 성공적으로 등록되었습니다.",
        data: []

    })
})


module.exports = router