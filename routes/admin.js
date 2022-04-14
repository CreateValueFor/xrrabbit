const express = require('express')
const { Op } = require('sequelize')
const Donor = require("../models/donor")
const Article = require("../models/article")
const Crimson = require("../models/crimson")
const router = express.Router();
const fs = require('fs');
const fsExtra = require('fs-extra')
const multer = require('multer')
const path = require('path')
const SportStar = require('../models/sportsStar')


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


const sportsThumbUpload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {

            const { genre, name } = req.body
            const isExist = fs.existsSync(`public/history/주제별/스포츠 스타/${genre}/${name}`)
            if (!isExist) {

                fs.mkdirSync(`./public/history/주제별/스포츠 스타/${genre}/${name}`)
                fs.mkdirSync(`./public/history/주제별/스포츠 스타/${genre}/${name}/대표사진`)
                fs.mkdirSync(`./public/history/주제별/스포츠 스타/${genre}/${name}/추가사진`)
                fs.mkdirSync(`./public/history/주제별/스포츠 스타/${genre}/${name}/thumbnail`)
            }


            if (file.fieldname === 'thumb') {
                //무조건 하나 있는 경우에 다 삭제하고 업로드 진행
                fsExtra.emptyDirSync(`./public/history/주제별/스포츠 스타/${genre}/${name}/대표사진`)
                fsExtra.emptyDirSync(`./public/history/주제별/스포츠 스타/${genre}/${name}/추가사진`)
                fsExtra.emptyDirSync(`./public/history/주제별/스포츠 스타/${genre}/${name}/thumbnail`)
                done(null, `public/history/주제별/스포츠 스타/${genre}/${name}/대표사진`)
            } else if (file.fieldname === 'thumb_detail') {
                done(null, `public/history/주제별/스포츠 스타/${genre}/${name}/추가사진`)
            } else {
                done(null, `public/history/주제별/스포츠 스타/${genre}/${name}/thumbnail`)
            }
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            // console.log(path.basename(file.originalname, ext) + Date.now() + ext)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    })
})

const donorUploader = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {

            const { clubId, name } = req.body
            const isExist = fs.existsSync(`public/${clubId}/${name}`)
            if (!isExist) {

                fs.mkdirSync(`./public/${clubId}/${name}`)
                fs.mkdirSync(`./public/${clubId}/${name}/대표 사진`)
                fs.mkdirSync(`./public/${clubId}/${name}/추가 사진`)
                fs.mkdirSync(`./public/${clubId}/${name}/thumbnail`)
                fs.mkdirSync(`./public/${clubId}/${name}/기사`)
                fs.mkdirSync(`./public/${clubId}/${name}/로고`)
            }

            const field = file.fieldname;

            if (field === 'thumb') {
                //무조건 하나 있는 경우에 다 삭제하고 업로드 진행
                fsExtra.emptyDirSync(`./public/${clubId}/${name}/대표 사진`)
                fsExtra.emptyDirSync(`./public/${clubId}/${name}/추가 사진`)
                fsExtra.emptyDirSync(`./public/${clubId}/${name}/thumbnail`)
                fsExtra.emptyDirSync(`./public/${clubId}/${name}/로고`)
                done(null, `./public/${clubId}/${name}/대표 사진`)
            } else if (field === 'thumb_detail') {
                done(null, `./public/${clubId}/${name}/추가 사진`)
            } else if (field === 'thumb_thumb_detail') {
                done(null, `./public/${clubId}/${name}/thumbnail`)
            } else if (field === 'logo') {
                done(null, `./public/${clubId}/${name}/로고`)
            }
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            // console.log(path.basename(file.originalname, ext) + Date.now() + ext)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    })
})


const articleUploader = multer({
    storage: multer.diskStorage({

        destination(req, file, done) {
            const { clubId, name } = req.body
            if (file.fieldname === 'init') {
                fsExtra.emptyDirSync(`./public/${clubId}/${name}/기사`)
            }
            done(null, `./public/${clubId}/${name}/기사`)
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    })
})

router.post('/sports', sportsThumbUpload.fields([{ name: "thumb" }, { name: "thumb_detail" }]), async (req, res, next) => {
    const { genre, name, major, description } = req.body;

    const exStar = await SportStar.findOne({
        where: {
            name,
            genre,

        }
    })
    let newStar
    if (exStar) {
        newStar = await SportStar.update({
            name,
            genre,
            major,
            description
        }, { where: { id: exStar.id } })

    } else {
        newStar = await SportStar.create({
            genre,
            name,
            major,
            description
        })

    }


    return res.json({
        success: true,
        message: "스포츠 스타 업로드 완료",
        data: newStar
    })
})

router.post('/article', articleUploader.any(), async (req, res, next) => {
    const { donorId, regdate, title, contents } = req.body

    const exArticle = await Article.findOne({
        where: {
            donor: donorId
        }
    })

    let newArticle
    if (exArticle) {
        newArticle = await Article.update({
            regdate,
            title,
            contents,

        }, { where: { id: exArticle.id } })

    } else {
        newArticle = await Article.create({
            regdate,
            title,
            contents,
            donor: donorId
        })

    }
    return res.json({
        success: true,
        message: "기사 생성",
        data: newArticle
    })
})

router.post('/article/check', async (req, res, next) => {
    const { search, clubId } = req.body;
    const donor = await Donor.findOne({ where: { name: search, club: clubId } })

    if (!donor) {
        return res.json({
            success: false,
            message: "기부자 못 찾음",

        })
    }

    return res.json({
        success: true,
        message: "기부자 찾음",
        data: donor
    })
})

router.post('/crimson', donorUploader.fields([{ name: 'logo' }, { name: "thumb" }, { name: "thumb_detail" }]), async (req, res, next) => {
    const { name, phone, address, level } = req.body;
    const exCrimson = await Crimson.findOne({
        where: {
            name,
            phone,

        }
    })
    let newCrimson
    if (exCrimson) {
        newCrimson = await Crimson.update({
            name,
            phone,
            address,
            level
        }, { where: { id: exCrimson.id } })

    } else {
        newCrimson = await Crimson.create({
            phone,
            name,
            address,
            level
        })

    }
    return res.json({
        success: true,
        message: "크림슨 생성",
        data: newCrimson
    })



})



router.post('/donor', donorUploader.fields([{ name: 'logo' }, { name: "thumb" }, { name: "thumb_detail" }]), async (req, res) => {

    // const clubId = req.params.clubId

    const { name, role, belong, position, description, clubId } = req.body
    switch (clubId) {
        case '1':
        case '2':
        case "3":
        case '4':
        case '5':
        case '6':
            try {

                const exUser = await Donor.findOne({
                    where: {
                        name: name
                    }
                })


                let newDonor;
                if (exUser) {
                    newDonor = await Donor.update({
                        name, role, belong, position, description
                    }, { where: { id: exUser.id } })
                } else {


                    newDonor = await Donor.create({
                        name,
                        role: role || '기업',
                        belong: belong || "일반",
                        position: position || "일반",
                        description,
                        club: clubId
                    })
                }

                return res.json({
                    success: true,
                    message: "기부자가 성공적으로 등록되었습니다.",
                    data: newDonor
                })

            } catch (error) {
                return res.status(400).json({
                    code: false,
                    error,

                })
            }
            console.log('덜 복잡한 입력값들')
            break;
        case '7':
        case '8':
            try {
                const exUser = await Donor.findOne({
                    where: {
                        name, role, belong, position
                    }
                })

                let newDonor;
                if (exUser) {
                    newDonor = await Donor.update({
                        name, role, belong, position
                    }, { where: { id: exUser.id } })
                } else {

                    newDonor = await Donor.create({
                        name,
                        role,
                        belong,
                        position,
                        club: clubId
                    })
                }

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