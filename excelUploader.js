const csvtojson = require('csvtojson');
const mysql = require("mysql2");

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
const fileName = "./dataReal/default.csv";

con.connect((err) => {
    if (err) return console.error(
        'error: ' + err.message);

    con.query("truncate donors",
        (err, result) => {

        });
});

csvtojson().fromFile(fileName).then(source => {

    // Fetching the data from each row 
    // and inserting to the table "sample"
    for (var i = 0; i < source.length; i++) {
        console.log(source);
        continue;
        if (source[i]["이름"] == "") {
            continue;
        }

        var name = source[i]["이름"],
            donationAmount = Number(source[i]["납입금액"].replaceAll(",", "")),
            role = source[i]["인명구분"] || '일반',
            major = source[i]["학과(교우)"] || '일반',
            classNum = Number(source[i]["학번"]) || 0,
            faculty = source[i]["교직원 소속"] || '일반',
            facultyRole = source[i]["직책(교직원)"] || '일반'

        var insertStatement =
            `INSERT INTO donors values(?,?, ?, ?, ?, ?, ?,?,8)`;
        var items = [i + 3366, name, donationAmount, role, major, classNum, faculty, facultyRole];

        // Inserting data of current row
        // into database
        // con.query(insertStatement, items,
        //     (err, results, fields) => {
        //         if (err) {
        //             // break;
        //             console.log(
        //                 "Unable to insert item at row ", i + 1);
        //             return console.log(err);
        //         }
        //         // console.log("data fetched", results)
        //     });
    }
    console.log(
        "All items stored into database successfully");
});

