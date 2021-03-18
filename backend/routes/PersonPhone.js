const express = require('express');
const router = express.Router();
const dbConn = require('../config/db.config')


router.get('/PersonPhone', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `SELECT * FROM personphone WHERE PhoneNumberTypeID = ${req.query.PhoneNumberTypeID}`;
        dbConn.query(sql, function(err, result) {
            return res.json({ item: result });
        });
    });
});
router.get('/PersonPhone/:BusinessEntityID', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `SELECT * FROM personphone WHERE pp.BusinessEntityID = ${req.body.BusinessEntityID} `;
        dbConn.query(sql, function(err, result) {
            return res.status(200).json({ item: result });
        });
    });
});
router.post('/addPersonPhone', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `INSERT INTO personphone (PhoneNumber,PhoneNumberTypeID) VALUES ("${req.body.PhoneNumber}",${req.body.PhoneNumberTypeID})`;
        dbConn.query(sql, function(err, result) {
            if (!err) {
                return res.status(200).json({ status: "OK" });
            } else {
                return res.json({ status: "ERR" });
            }
        });
    });
});
router.post('/editPersonPhone', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `UPDATE personphone SET PhoneNumber = "${req.body.PhoneNumber}" WHERE BusinessEntityID =  ${req.body.BusinessEntityID}`;
        dbConn.query(sql, function(err, result) {
            if (!err) {
                return res.json({ status: "OK" });
            } else {
                return res.json({ status: "ERR" });
            }
        });
    });
});
router.post('/delPersonPhone', (req, res) => {
    dbConn.connect(function(err) {
        let sql = `DELETE FROM personphone WHERE BusinessEntityID =  ${req.body.BusinessEntityID} AND PhoneNumberTypeID = ${req.body.PhoneNumberTypeID}`;
        dbConn.query(sql, function(err, result) {
            if (!err) {
                return res.json({ status: "OK" });
            } else {
                return res.json({ status: "ERR" });
            }
        });
    });
});
module.exports = router;