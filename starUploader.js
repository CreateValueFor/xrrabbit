const csvtojson = require('csvtojson');
const mysql = require("mysql2");
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

// 스포츠 스타가 있는 경우
const fileName = "./public/history/주제별/스포츠 스타/sportsStar.csv";

csvtojson().fromFile(fileName).then(async (source) => {

    // Fetching the data from each row 
    // and inserting to the table "sample"
    for (let i = 0; i < source.length; i++) {


        let genre = source[i]["장르"],
            name = source[i]["이름"],
            major = source[i]["학과/ 학번"],
            description = ""
        const basePath = `./public/history/주제별/스포츠 스타/${genre}/${name}/설명/`;

        const text = await fs.readdirSync(basePath)
        if (text.length) {
            description = await fs.readFileSync(basePath + text).toString()
        }

        let insertStatement =
            `INSERT IGNORE INTO sportsStars values(?,?,?,?,?)`;
        let items = [i + 1, genre, name, major, description];


        // into database
        con.query(insertStatement, items,
            (err, results, fields) => {
                if (err) {

                    console.log(
                        "Unable to insert item at row ", i + 1);
                    return console.log(err);
                }
            });
    }
    console.log(
        "All items stored into database successfully");
});

