var express = require('express');
const { Op } = require('sequelize');
const Donor = require("../models/donor")
var router = express.Router();

/* GET home page. */
router.get('/search', function (req, res, next) {
    res.json({
        code: 200,
        message: "hello"
    })
});

// 클럽 별 기부자 목록 보여주기
router.get('/club/:clubId', async (req, res) => {
    try {
        const donors = await Donor.findAll({ where: { club: req.params.clubId } })
        res.json({
            success: true,
            message: 'donors fetched succesfully',
            data: donors
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 기부자 상세 보여주기
router.get('/:donorId/detail', async (req, res) => {
    try {
        const donors = await Donor.findOne({ where: { id: req.params.donorId } })
        res.json({
            success: true,
            message: 'donor fetched succesfully',
            data: donors
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 기부자 기사 보여주기
router.get('/:donorId/article', async (req, res) => {
    try {
        const donors = await Donor.findOne({ where: { id: req.params.donorId } })
        res.json({
            success: true,
            message: 'articles fetched succesfully',
            data: donors
        })
    } catch (err) {
        console.error(err);
        next(err);
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
                        faculty: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        facultyRole: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        role: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        major: {
                            [Op.like]: `%${search}%`
                        }
                    },

                ]

            }
        })
        res.json({
            success: true,
            message: 'articles fetched succesfully',
            data: donors
        })
    } catch (err) {
        console.error(err);
        next(err);
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
                        faculty: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        facultyRole: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        role: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        major: {
                            [Op.like]: `%${search}%`
                        }
                    },

                ]

            }
        })
        res.json({
            success: true,
            message: 'articles fetched succesfully',
            data: donors
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
