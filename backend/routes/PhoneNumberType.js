const express = require('express');
const router = express.Router();
const dbConn = require('../config/db.config')


router.get('/PhoneNumberType', (req, res) => {
    dbConn.connect(function(err) {
        let sql = "SELECT * FROM phonenumbertype";
        dbConn.query(sql, function(err, result) {
            return res.json({ item: result });
        });
    });
});
router.get('/PhoneNumberType/:PhoneNumberTypeID', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `SELECT * FROM phonenumbertype WHERE PhoneNumberTypeID =  ${req.body.PhoneNumberTypeID}`;
        dbConn.query(sql, function(err, result) {
            return res.json({ item: result });
        });
    });
});
router.post('/addPhoneNumberType', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `INSERT INTO phonenumbertype (Name) VALUES ("${req.body.Name}")`;
        dbConn.query(sql, function(err, result) {
            if (!err) {
                return res.json({ status: "OK" });
            } else {
                return res.json({ status: "ERR" });
            }
        });
    });
});
router.post('/editPhoneNumberType', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `UPDATE phonenumbertype SET Name = "${req.body.Name}" WHERE PhoneNumberTypeID =  ${req.body.PhoneNumberTypeID}`;
        console.log(sql);
        dbConn.query(sql, function(err, result) {
            if (!err) {
                return res.json({ status: "OK" });
            } else {
                return res.json({ status: "ERR" });
            }
        });
    });
});
router.post('/delPhoneNumberType', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `DELETE FROM personphone WHERE PhoneNumberTypeID = ${req.body.PhoneNumberTypeID}`;
        dbConn.query(sql, function(err, result) {
            if (!err) {
                console.log("Deletado registro no personphone");
            } else {
                console.log("Erro ao deletar registro no personphone");
            }
        });
    });
    dbConn.connect(function(err) {
        sql = `DELETE FROM phonenumbertype WHERE PhoneNumberTypeID = ${req.body.PhoneNumberTypeID}`;
        dbConn.query(sql, function(err, result) {
            if (!err) {
                console.log("Deletado registro no phonenumbertype")
                return res.json({ status: "OK" });
            } else {
                console.log("Erro ao deletar registro no phonenumbertype");
                return res.json({ status: "ERR" });
            }
        });
    });
});
module.exports = router;