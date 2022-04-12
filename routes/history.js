var express = require('express');
const { Op } = require('sequelize');
const SportsStar = require("../models/sportsStar")
var router = express.Router();
const fs = require('fs')

// const PUBLIC_URL = "https://xrrabbit.s3.ap-northeast-2.amazonaws.com/public/history/"
// const PUBLIC_URL = 'http://13.209.17.105:8000/public/history/'
// const PUBLIC_URL = 'http://13.125.182.91:8000/history/'
const PUBLIC_URL = 'http://13.125.213.196:8000/history/'

// const BASE_URL = 'http://13.124.131.69:8000'
// const PUBLIC_URL = 'http://fb15-223-62-216-138.ngrok.io/history/'

//고대 서울 캠 불러오기
router.get('/seoul/:duration', async (req, res) => {
    const duration = req.params.duration

    try {
        const isExist = await fs.existsSync(`./public/history/original/연혁별/서울캠퍼스/${duration}년`)
        const isIpadExist = await fs.existsSync(`./public/history/ipad/연혁별/서울캠퍼스/${duration}년`)
        if (!isExist || !isIpadExist) {
            return res.status(400).json({
                success: false,
                message: '해당 년도의 연혁 사진이 존재하지 않습니다.'
            })
        }
        const dir = await fs.readdirSync(`./public/history/original/연혁별/서울캠퍼스/${duration}년`).map(item =>
            `${PUBLIC_URL}original/연혁별/서울캠퍼스/${duration}년/${item}`)
        const ipadDir = await fs.readdirSync(`./public/history/ipad/연혁별/서울캠퍼스/${duration}년`).map(item =>
            `${PUBLIC_URL}ipad/연혁별/서울캠퍼스/${duration}년/${item}`)
        res.json({
            success: true,
            message: duration + "년의 연혁 사진을 정상적으로 불러왔습니다.",
            data: {
                original: dir,
                ipad: ipadDir
            }

        })
    } catch (err) {
        res.json({
            success: false,
            message: "파일 인식에 실패하였습니다.",
            error: err
        })
    }
})

//고대 세종 캠 불러오기
router.get('/sejong/:duration', async (req, res) => {
    const duration = req.params.duration

    try {
        const isExist = await fs.existsSync(`./public/history/original/연혁별/세종캠퍼스/${duration}년`)
        const isIpadExist = await fs.existsSync(`./public/history/ipad/연혁별/세종캠퍼스/${duration}년`)
        if (!isExist || !isIpadExist) {
            return res.status(400).json({
                success: false,
                message: '해당 년도의 연혁 사진이 존재하지 않습니다.'
            })
        }
        const dir = await fs.readdirSync(`./public/history/original/연혁별/세종캠퍼스/${duration}년`).map(item =>
            `${PUBLIC_URL}original/연혁별/세종캠퍼스/${duration}년/${item}`)
        const ipadDir = await fs.readdirSync(`./public/history/ipad/연혁별/세종캠퍼스/${duration}년`).map(item =>
            `${PUBLIC_URL}ipad/연혁별/세종캠퍼스/${duration}년/${item}`)
        res.json({
            success: true,
            message: duration + "년의 연혁 사진을 정상적으로 불러왔습니다.",
            data: { original: dir, ipad: ipadDir }

        })
    } catch (err) {
        res.json({
            success: false,
            message: "파일 인식에 실패하였습니다.",
            error: err
        })
    }
})

//테마별 메인 사진 불러오기
router.get('/theme', async (req, res) => {

    const BASIC_PATH = `${PUBLIC_URL}original/테마별/`
    const IPAD_PATH = `${PUBLIC_URL}ipad/테마별/`

    const dir = await fs.readdirSync(`./public/history/original/테마별`).filter(item =>
        item.includes('jpg')).map(item => BASIC_PATH + item)
    const ipadDir = await fs.readdirSync(`./public/history/ipad/테마별`).filter(item =>
        item.includes('jpg')).map(item => BASIC_PATH + item)

    res.json({
        success: true,
        message: "테마를 정상적으로 불러왔습니다.",
        data: { original: dir, ipad: ipadDir }
    })
})

//테마별 불러오기
router.get('/theme/:theme', async (req, res) => {
    const theme = req.params.theme
    const BASIC_PATH = `${PUBLIC_URL}original/테마별/${theme}/`
    const IPAD_PATH = `${PUBLIC_URL}ipad/테마별/${theme}/`

    const isExist = await fs.existsSync(`./public/history/original/테마별/${theme}`)
    const isIpadExist = await fs.existsSync(`./public/history/ipad/테마별/${theme}`)
    if (!isExist || !isIpadExist) {
        return res.status(400).json({
            success: false,
            message: '해당 테마가 존재하지 않습니다. 오타가 있는지 확인해주세요.'
        })
    }


    const dir = await fs.readdirSync(`./public/history/original/테마별/${theme}`)
        .map(item => BASIC_PATH + item)
    const ipadDir = await fs.readdirSync(`./public/history/ipad/테마별/${theme}`)
        .map(item => BASIC_PATH + item)

    res.json({
        success: true,
        message: theme + " 테마를 정상적으로 불러왔습니다.",
        data: {
            original: dir,
            ipad: ipadDir
        }
    })
})

//위인 불러오기
router.get('/people/great/:name', async (req, res) => {

    const name = req.params.name
    const BASIC_PATH = `${PUBLIC_URL}original/인물별/위인/${name}/`
    const IPAD_PATH = `${PUBLIC_URL}ipad/인물별/위인/${name}/`
    try {
        const dir = fs.readdirSync(`./public/history/original/인물별/위인`).filter(item => {
            console.log(item, name, item === name)
        })
        const ipadDir = fs.readdirSync(`./public/history/ipad/인물별/위인`).filter(item => {
            console.log(item, name, item === name)
        })
        console.log(dir)


        const img = fs.readdirSync(`./public/history/original/인물별/위인/${name}`).filter(item => item.includes('png')).map(item => ({

            img: (BASIC_PATH + item),
            folder: item.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, "")
            // folder: item.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, "")
        }))
        const ipadImg = fs.readdirSync(`./public/history/ipad/인물별/위인/${name}`).filter(item => item.includes('png')).map(item => ({

            img: (ipadDir + item),
            folder: item.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, "")
            // folder: item.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi, "")
        }))
        const description = fs.readFileSync(`./public/history/original/인물별/위인/${name}/${name}.txt`).toString()
        const ipadDescription = fs.readFileSync(`./public/history/ipad/인물별/위인/${name}/${name}.txt`).toString()

        res.json({
            success: true,
            message: "유저 정보를 정상적으로 불러왔습니다.",
            data: {
                original: {
                    description,
                    img,
                },
                ipad: {
                    img: ipadImg,
                    description: ipadDescription
                }

            }
        })
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }
})


//인물별 이수현 특별히...
router.get('/people/great/:name/:title', async (req, res) => {

    const { name, title } = req.params
    const BASIC_PATH = `${PUBLIC_URL}original/인물별/위인/${name}/${title}/`
    const IPAD_PATH = `${PUBLIC_URL}ipad/인물별/위인/${name}/${title}/`
    try {

        const img = fs.readdirSync(`./public/history/original/인물별/위인/${name}/${title}`).filter(item => item.includes('png') || item.includes('jpg') || item.includes('JPG')).map(item => BASIC_PATH + item)
        const ipadImg = fs.readdirSync(`./public/history/ipad/인물별/위인/${name}/${title}`).filter(item => item.includes('png') || item.includes('jpg') || item.includes('JPG')).map(item => IPAD_PATH + item)

        res.json({
            success: true,
            message: "유저 정보를 정상적으로 불러왔습니다.",
            data:

            {
                original: img,
                ipad: ipadImg
            }

        })
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }
})

//인물별 불러오기
router.get('/people/:nick', async (req, res) => {
    const nick = req.params.nick
    const BASIC_PATH = `${PUBLIC_URL}original/인물별/${nick}/`
    const IPAD_PATH = `${PUBLIC_URL}ipad/인물별/${nick}/`
    if (nick === '위인') {
        const dir = await fs.readdirSync(`./public/history/original/인물별/위인`)
        const ipadDr = await fs.readdirSync(`./public/history/ipad/인물별/위인`)
        return res.json({
            success: true,
            message: '위인 리스트',
            data: { original: dir, ipad: ipadDr }
        })
    } else {

        const isExist = await fs.existsSync(`./public/history/original/인물별/${nick}`)
        const isIpadExist = await fs.existsSync(`./public/history/ipad/인물별/${nick}`)
        if (!isExist || !isIpadExist) {
            return res.status(400).json({
                success: false,
                message: '오타가 있는지 확인해주세요.'
            })
        }
        const dir = await fs.readdirSync(`./public/history/original/인물별/${nick}`)
            .map(item => BASIC_PATH + item)
        const ipadDir = await fs.readdirSync(`./public/history/ipad/인물별/${nick}`)
            .map(item => IPAD_PATH + item)
        return res.json({
            success: true,
            message: nick + " 사진을 정상적으로 불러왔습니다.",
            data: { original: dir, ipad: ipadDir }
        })
    }


})

router.get('/title/:title', async (req, res) => {
    const title = req.params.title
    const BASE_PATH = `./public/history/original/주제별/${title}`
    const IPAD_PATH = `./public/history/ipad/주제별/${title}`
    if (['교우회', '역대 교사', '스포츠'].includes(title)) {
        try {
            const data = fs.readdirSync(BASE_PATH).map(item => {
                return `${PUBLIC_URL}original/주제별/${title}/${item}`
            })
            const ipadData = fs.readdirSync(IPAD_PATH).map(item => {
                return `${PUBLIC_URL}ipad/주제별/${title}/${item}`
            })

            return res.json({
                success: true,
                message: title + " 사진들을 정상적으로 불러왔습니다.",
                data: {
                    original: data,
                    ipad: ipadData
                }
            })
        } catch (error) {
            return res.json({
                success: false,
                error
            })

        }
    } else {
        return res.status(400).json({
            success: false,
            message: "오타가 있거나 입력형식이 잘 못 되었습니다.",
        })
    }
})

router.get("/title/:title/:subtitle", async (req, res) => {
    const { title, subtitle } = req.params
    if (['학생활동', '축제', '고연전'].includes(title)) {
        try {
            const data = fs.readdirSync(`./public/history/original/주제별/${title}/${subtitle}`)
                .map(item => `${PUBLIC_URL}original/주제별/${title}/${subtitle}/${item}`)
            const ipadData = fs.readdirSync(`./public/history/ipad/주제별/${title}/${subtitle}`)
                .map(item => `${PUBLIC_URL}ipad/주제별/${title}/${subtitle}/${item}`)
            return res.json({
                success: true,
                message: `${subtitle} 사진들을 정상적으로 불러왔습니다.`,
                data: {
                    origin: data,
                    ipad: ipadData
                }
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error
            })
        }
    } else {
        return res.json({
            success: false,
            message: "입력 형식이 잘 못 되었습니다."
        })
    }
})

router.get("/star/:genre", async (req, res) => {
    const genre = req.params.genre;
    try {
        const stars = await SportsStar.findAll({ where: { genre } })
        return res.json({
            success: true,
            message: genre + " 선수들을 정상적으로 불러왔습니다.",
            data: stars
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
})

router.get("/star/:genre/:name", async (req, res) => {
    const { genre, name } = req.params;
    try {
        const star = await SportsStar.findOne({
            where: { name },
            raw: true,
            nest: true
        })
        const basePath = `./public/history/original/주제별/스포츠 스타/${genre}/${name}/`;
        const thumb = await fs.readdirSync(basePath + '대표사진').map(item => {
            return `${PUBLIC_URL}original/주제별/스포츠 스타/${genre}/${name}/대표사진/${item}`
        })
        const thumb_detail = await fs.readdirSync(basePath + "추가사진").map(item => {
            return `${PUBLIC_URL}original/주제별/스포츠 스타/${genre}/${name}/추가사진/${item}`
        })
        const thumb_thumb_detail = await fs.readdirSync(basePath + "추가사진").map(item => {
            return `${PUBLIC_URL}original/주제별/스포츠 스타/${genre}/${name}/thumbnail/${item}`
        })


        const ipadBasePath = `./public/history/ipad/주제별/스포츠 스타/${genre}/${name}/`;
        const ipadThumb = await fs.readdirSync(basePath + '대표사진').map(item => {
            return `${PUBLIC_URL}ipad/주제별/스포츠 스타/${genre}/${name}/대표사진/${item}`
        })
        const ipad_thumb_detail = await fs.readdirSync(basePath + "추가사진").map(item => {
            return `${PUBLIC_URL}ipad/주제별/스포츠 스타/${genre}/${name}/추가사진/${item}`
        })
        const ipad_thumb_thumb_detail = await fs.readdirSync(basePath + "추가사진").map(item => {
            return `${PUBLIC_URL}ipad/주제별/스포츠 스타/${genre}/${name}/thumbnail/${item}`
        })


        return res.json({
            success: true,
            message: genre + " 선수들을 정상적으로 불러왔습니다.",
            data: {
                original: {
                    ...star,
                    thumb,
                    thumb_detail,
                    thumb_thumb_detail
                },
                ipad: {
                    ...star,
                    ipadThumb,
                    ipad_thumb_detail,
                    ipad_thumb_thumb_detail
                }
            }
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
})



module.exports = router;
