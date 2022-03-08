const fs = require('fs');
const fastcsv = require("fast-csv")
const mysql = require("mysql2")
const Donor = require("./models/donor");
let stream = fs.createReadStream('./datas/default.csv');
let csvData = [];


let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
        csvData.push({
            name: String(data[1]),
            donationAmount: Number(data[3].replaceAll(',', "")),
            role: data[4],
            major: String(data[7]),
            class: Number(data[8]),
            faculty: String(data[13]),
            facultyRole: String(data[12]),
        });
    })
    .on("end", async function () {
        // remove the first line: header
        csvData.shift();
        // csvData[0].forEach(item => {

        //     Donor.create(item)
        // })
        await Donor.create(csvData[0])
        // connect to the MySQL database
        // save csvData
        Donor.bulkCreate(csvData, {
            fields: ["name", "donationAmount", "role", "major", "class", "faculty", "facultyRole"],

        })
    });
stream.pipe(csvStream);

