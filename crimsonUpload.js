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

// CSV file name
// 기사가 없는 경우
// const fileName = "./clubExcel/default.csv";
// const fileName = "./clubExcel/partner.csv";

// 기사가 있는 경우
const fileName = "./clubExcel/crimson.csv";
// const fileName = "./clubExcel/default.csv";


csvtojson().fromFile(fileName).then(async (source) => {

    // Fetching the data from each row 
    // and inserting to the table "sample"
    for (let i = 0; i < source.length; i++) {
        const clubIdx = 9;

        let name = source[i]["상호명"],
            address = source[i]["주소"].split("☎")[0],
            phone = source[i]["주소"].split("☎")[1],
            level = source[i]["등급"]


        let insertStatement =
            `INSERT IGNORE INTO crimsons values(?,?,?,?,?)`;
        let items = [i + 1, name, address, phone, level];

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
                // console.log("data fetched", results)
            });
    }
    console.log(
        "All items stored into database successfully");
});

