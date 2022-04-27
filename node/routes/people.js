var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/people-list', function(req, res, next) {
    var sql='SELECT * FROM people';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
       res.render('people-list', { title: 'People List', peopleData: data});
     });
     });
module.exports = router;
