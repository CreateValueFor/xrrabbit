var express = require('express');
const { Op } = require('sequelize');
const Donor = require("../models/donor")
const Article = require("../models/article")
const Crimson = require("../models/crimson")
const Club = require('../models/club')
var router = express.Router();
const fs = require('fs')

// const BASE_URL = 'http://13.209.17.105:8000'
const BASE_URL = 'http://13.125.213.196:8000' // 0404

// const BASE_URL = "https://xrrabbit.s3.ap-northeast-2.amazonaws.com/public"
// 클럽 별 기부자 목록 보여주기
router.get('/club/:clubId', async (req, res) => {
    try {
        if (req.params.clubId === '9') {
            const crimsons = await Crimson.findAll()
            return res.json({
                success: true,
                message: 'crimsons fetched succesfully',
                data: crimsons
            })
        }
        const donors = await Donor.findAll({ where: { club: req.params.clubId } })
        res.json({
            success: true,
            message: 'donors fetched succesfully',
            data: donors
        })
    } catch (err) {
        console.error(err);
        res.json({
            success: false,
            error: err
        })
    }
});

// 기부자 상세 보여주기
router.get('/:donorId/detail', async (req, res) => {

    let thumb = "";
    let logo = "";
    let description = "";
    let thumb_detail = [];
    let thumb_thumb_detail = [];
    try {
        let donors;

        if (req.params.donorId.includes('crimson')) {
            donors = await Crimson.findOne({
                where: { id: req.params.donorId.replace(/[^0-9]/g, '') },
                raw: true,
                nest: true
            })
            donors = {
                ...donors,
                club: 9
            }
            console.log(donors)
        } else {
            donors = await Donor.findOne({
                include: [{ model: Article }],
                where: { id: req.params.donorId },
                raw: true,
                nest: true
            })

        }

        if (![7, 8].includes(donors.club)) {
            thumb = await fs.readdirSync(`./public/${donors.club}/${donors.name}/대표 사진`).filter(item => item.includes('jpg') || item.includes('png') || item.includes('JPG') || item.includes('jpeg'))

            if (thumb.length) {
                thumb = `${BASE_URL}/${donors.club}/${donors.name}/대표 사진/` + thumb
            }
            logo = await fs.readdirSync(`./public/${donors.club}/${donors.name}/로고`).filter(item => item.includes('jpg') || item.includes('png') || item.includes('JPG') || item.includes('jpeg'))[0] || ""
            if (logo) {
                logo = `${BASE_URL}/${donors.club}/${donors.name}/로고/` + logo
            }

            thumb_detail = await fs.readdirSync(`./public/${donors.club}/${donors.name}/추가 사진`).filter(item => !item.includes('json') && !item.includes('gif') && item.includes('jpg') || item.includes('JPG') || item.includes('png') || item.includes('jpeg')).map(item => {
                return `${BASE_URL}/${donors.club}/${donors.name}/추가 사진/` + item
            })


        }
        if (![7, 8].includes(donors.club)) {
            thumb_thumb_detail = await fs.readdirSync(`./public/${donors.club}/${donors.name}/thumbnail`).filter(item => !item.includes('json') && !item.includes('gif') && item.includes('jpg') || item.includes('JPG') || item.includes('png') || item.includes('jpeg')).map(item => {
                return `${BASE_URL}/${donors.club}/${donors.name}/thumbnail/` + item
            })
        }
        return res.json({
            success: true,
            message: 'donor fetched succesfully',
            data: {
                ...donors,
                logo: logo || "",

                thumb,
                thumb_detail,
                thumb_thumb_detail,

            }
        })

    } catch (err) {
        console.error(err);
        res.json({
            success: false,
            error: err
        })
    }
});

// 기부자 기사 보여주기
router.get('/:donorId/article', async (req, res, next) => {

    let articleImg = [];
    let contents = "";

    try {
        const exDonor = await Donor.findOne({
            where: { id: req.params.donorId }
        })
        if (!exDonor) {
            return res.json({
                success: false,
                message: 'donorId is not exist'
            })
        }

        const article = await Article.findOne({
            where: { donor: req.params.donorId },
            raw: true
        })

        if (!article) {
            return res.json({
                success: false,
                message: "기사가 존재하지 않는 기부자입니다."

            })
        }

        articleImg =
            await fs.readdirSync(`./public/${exDonor.club}/${exDonor.name}/기사`).filter(item => item.includes('jpg') || item.includes('png')).map(item => {

                return `${BASE_URL}/${exDonor.club}/${exDonor.name}/기사/` + item
            })
        articleImg = articleImg.filter(item => item != null)

        return res.json({
            success: true,
            message: 'articles fetched succesfully',
            data: { ...article, articleImg }
        })
    } catch (err) {
        console.error(err);
        res.json({
            success: false,
            error: err
        })
    }
});

// 기부자 조건 검색 클럽별
router.get('/:search/:clubId', async (req, res) => {
    try {
        const { search, clubId } = req.params
        const donors = await Donor.findAll({
            include: [{ model: Article }],
            where: {
                club: clubId,
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        role: {
                            [Op.like]: `%${search}%`
                        }
                    },
                ]
            }
        })
        res.json({
            success: true,
            message: 'donors searched succesfully',
            data: donors
        })
    } catch (err) {
        console.error(err);
        res.json({
            success: false,
            error: err
        })
    }
});

// 기부자 조건 검색
router.get('/:search', async (req, res) => {
    try {
        const { search } = req.params
        const club = await Club.findOne({
            where: {
                [Op.or]: [{
                    club: {
                        [Op.like]: `%${search}%`
                    },
                },
                {
                    name: {
                        [Op.like]: `%${search}%`
                    }
                }
                ]
            }
        })
        const searchList = [

            {
                name: {
                    [Op.like]: `%${search}%`
                }
            },
            {
                role: {
                    [Op.like]: `%${search}%`
                }
            },

        ]

        club && (club.id !== 9) && searchList.push({
            club: club.id
        })


        const donors = await Donor.findAll({
            include: [{ model: Article }],
            where: {

                [Op.or]: searchList

            }
        })
        let crimsons;
        if (club) {
            if (club.id !== 9) {

                crimsonSearchOption = [
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    }
                ]
                crimsons = await Crimson.findAll({
                    where: {

                        [Op.or]: crimsonSearchOption

                    }
                })
            } else {
                crimsons = await Crimson.findAll()
            }
        }

        let response = [];
        if (donors) {
            response = [...donors]
        }
        if (crimsons) {
            response = [...response, ...crimsons];
        }

        res.json({
            success: true,
            message: 'donors searched succesfully',
            data: response
        })

    } catch (err) {
        console.error(err);
        res.json({
            success: false,
            error: err
        })
    }
});

module.exports = router;
