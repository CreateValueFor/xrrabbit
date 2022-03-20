const AWS = require('aws-sdk')
const uuid = require("uuid")

const fs = require('fs');
const sequelize = require('sequelize');

const BUcKET_NAM = "xrrabbit";
const s3 = new AWS.S3({ accessKeyId: 'AKIA4OIEQNEAWQILW4GD', secretAccessKey: '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' })
const dd = s3.getObject(
    { Key: 'public/history/테마별/418의거.jpg', Bucket: BUcKET_NAM }
    , function (err, data) {
        if (err) console.log(err);
        else console.log(data.Body)
    })
