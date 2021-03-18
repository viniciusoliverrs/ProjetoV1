const express = require('express');
const router = express.Router();
const dbConn = require('../config/db.config')

/* PhoneNumberType - GET */
router.get('/PhoneNumberType', (req, res) => {
    dbConn.connect(function(err) {
        let sql = "SELECT * FROM phonenumbertype";
        if (req.query.PhoneNumberTypeID) {
            sql = `SELECT * FROM phonenumbertype WHERE PhoneNumberTypeID =  ${req.query.PhoneNumberTypeID}`;
        }
        dbConn.query(sql, function(err, result) {
            return res.status(200).json({ "item": result });
        });
    });
});
/* searchPhone- GET */
router.get('/searchPhone', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `SELECT * FROM phonenumbertype AS pn INNER JOIN personphone AS pp ON pp.PhoneNumberTypeID = pn.PhoneNumberTypeID WHERE pn.Name LIKE "%${req.query.Search}%" OR pp.PhoneNumber LIKE "%${req.query.Search}%"`;
        console.log(sql);
        dbConn.query(sql, function(err, result) {
            return res.status(200).json({ "item": result });
        });
    });
});
/* addPhoneNumberType - POST */
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
/* editPhoneNumberType - POST */
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
/* delPhoneNumberType - POST */
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