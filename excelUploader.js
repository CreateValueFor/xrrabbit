const csvtojson = require('csvtojson');
const mysql = require("mysql2");
const iconv = require("iconv-lite")

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
const fileName = "./clubExcel/default.csv";

// 기사가 있는 경우
// const fileName = "./clubExcel/silver.csv";
// const fileName = "./clubExcel/default.csv";


csvtojson().fromFile(fileName).then(source => {

    // Fetching the data from each row 
    // and inserting to the table "sample"
    for (let i = 0; i < source.length; i++) {

        let name = source[i]["이름"],
            role = source[i]["인명구분"] || '일반',
            major = source[i]["소속"] || '일반',
            faculty = source[i]["직책(교직원)"] || '일반'
        // title = source[i]["기사 제목"] || '일반',
        // regDate = source[i]["기사 날짜"].replaceAll(".", "-").replaceAll(" ", "") || '일반',
        // contents = source[i]["기사 본문"] || ""


        let insertStatement =
            `INSERT INTO donors values(?,?,?,?,?,9)`;
        let items = [i + 270, name, role, major, faculty];

        // let articleStatement =
        //     `INSERT INTO articles values(?,?,?,?,?)`;
        // let article = [i + 7, regDate, title, contents, i + 10];

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

