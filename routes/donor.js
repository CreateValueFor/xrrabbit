var express = require('express');
const { Op } = require('sequelize');
const Donor = require("../models/donor")
const Article = require("../models/article")
const Crimson = require("../models/crimson")
var router = express.Router();
const fs = require('fs')


// 클럽 별 기부자 목록 보여주기
router.get('/club/:clubId', async (req, res) => {
    try {
        if (req.params.clubId === '8') {
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
    try {
        const donors = await Donor.findOne({
            include: [{ model: Article }],
            where: { id: req.params.donorId },
            raw: true,
            nest: true
        })

        if (![1, 9].includes(donors.club)) {
            thumb = await fs.readdirSync(`./public/${donors.club}/${donors.name}/대표 사진`)
            if (thumb) {
                thumb = `/${donors.club}/${donors.name}/대표 사진` + thumb
            }
            logo = await fs.readdirSync(`./public/${donors.club}/${donors.name}/로고`)
            if (logo) {
                logo = `/${donors.club}/${donors.name}/로고` + logo
            }
            description = await fs.readdirSync(`./public/${donors.club}/${donors.name}/기부자 소개`)
            if (description) {
                description = `/${donors.club}/${donors.name}/기부자 소개` + description
            }
            thumb_detail =
                await fs.readdirSync(`./public/${donors.club}/${donors.name}/추가 사진`).map(item => {
                    return `/${donors.club}/${donors.name}/추가 사진` + item
                })
        }
        return res.json({
            success: true,
            message: 'donor fetched succesfully',
            data: {
                ...donors,
                logo,
                description,
                thumb,
                thumb_detail
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

        // articleImg =
        //     await fs.readdirSync(`./public/${exDonor.club}/${exDonor.name}/기사/${exDonor.name}`).map(item => {
        //         return `/${exDonor.club}/${exDonor.name}/기사/${exDonor.name}` + item
        //     })
        articleImg =
            await fs.readdirSync(`./public/${exDonor.club}/${exDonor.name}/기사`).map(item => {
                return `/${exDonor.club}/${exDonor.name}/기사` + item
            })

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
            where: {
                club: clubId,
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        belong: {
                            [Op.like]: `%${search}%`
                        }
                    },

                    {
                        role: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        position: {
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
        const donors = await Donor.findAll({
            where: {

                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        position: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        role: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        belong: {
                            [Op.like]: `%${search}%`
                        }
                    },

                ]

            }
        })
        const crimsons = await Crimson.findAll({
            where: {

                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        level: {
                            [Op.like]: `%${search}%`
                        }
                    },

                ]

            }
        })
        res.json({
            success: true,
            message: 'donors searched succesfully',
            data: [...donors, ...crimsons]
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
