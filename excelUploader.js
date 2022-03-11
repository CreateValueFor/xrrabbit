const csvtojson = require('csvtojson');
const mysql = require("mysql2");
const Iconv = require("iconv").Iconv
const iconv = require('iconv-lite')
const fs = require('fs');

// Database credentials
const hostname = "localhost",
    username = "root",
    password = "mk159753",
    databsename = "xrrabbit"
// Establish connection to the database
let con = mysql.createConnection({
    host: hostname,
    user: username,
    password: password,
    database: databsename,
});

// CSV file name
// 기사가 없는 경우
// const fileName = "./clubExcel/default.csv";
// const fileName = "./clubExcel/default.csv";

// 기사가 있는 경우
const fileName = "./clubExcel/default.csv";
// const fileName = "./clubExcel/default.csv";



csvtojson().fromFile(fileName).then(async (source) => {

    // Fetching the data from each row 
    // and inserting to the table "sample"
    for (let i = 0; i < source.length; i++) {
        const clubIdx = 8;
        const offset = 270;
        const articleOffset = 7;

        let name = source[i]["이름"]

        let description = ""
        let articleDir = ""
        // 파트너 클럽 일반 클럽은 존재하지 않음 
        // let description = await fs.readdirSync(`./public/${clubIdx}/${name}/기부자 소개`).filter(item => item.includes('txt'))[0]
        // description = await fs.readFileSync(`./public/${clubIdx}/${name}/기부자 소개/${description}`).toString()


        // let articleDir = await fs.readdirSync(`./public/${clubIdx}/${name}/기사`).filter(item =>
        //     item.includes('txt')
        // )[0]
        // if (articleDir !== undefined) {
        //     articleDir = await fs.readFileSync(`./public/${clubIdx}/${name}/기사/${articleDir}`)

        //     articleDir = iconv.decode(articleDir, 'EUC-KR').toString()
        // }






        let role = source[i]["인명구분"] || '일반',
            major = source[i]["소속"] || '일반',
            faculty = source[i]["직책(교직원)"] || '일반'
        // title = source[i]["기사 제목"] || '일반',
        // regDate = source[i]["기사 날짜"].replaceAll(".", "-").replaceAll(" ", "") || '일반'
        //     contents = await fs.readFileSync(`./public/7/${name}/기사`)
        // source[i]["기사 본문"] || ""




        let insertStatement =
            `INSERT IGNORE INTO donors values(?,?,?,?,?,?,${clubIdx})`;
        let items = [i + offset, name, description, role, major, faculty];

        // let articleStatement =
        //     `INSERT IGNORE INTO articles values(?,?,?,?,?)`;
        // let article = [i + articleOffset, regDate, title, articleDir, i + offset];

        // Inserting data of current row
        // into database
        con.query(insertStatement, items,
            (err, results, fields) => {
                if (err) {

                    console.log(
                        "Unable to insert item at row ", i + 1);
                    return console.log(err);
                }


                // if (title === '일반') {
                //     return
                // }

                // con.query(articleStatement, article, (err1, results1, fields1) => {
                //     if (err1) {
                //         console.log(
                //             "Unable to insert item at row ", i + 1);
                //         return console.log(err1);
                //     }

                // })
                // console.log("data fetched", results)
            });
    }
    console.log(
        "All items stored into database successfully");
});

