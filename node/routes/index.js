var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/', function(req, res, next) {

    var names =  ["Wesley", "Verner", "Paulo", "Maria", "Marcia", "Marta", "Sandra", "Deacon", "Sarah", "Tucker", "James", "Andre", 
       "Marcos", "Silvia", "Picard", "Kirk", "Worf", "Jonas", "Carolina", "Mateus", "Lucke", "Harrison", "Humberto"];
    var randName = names[Math.floor(Math.random() * names.length)];
    
    var insertSql = "insert into people(name) values('" + randName + "')";
    
    db.query(insertSql);

    var sql='SELECT * FROM people';
    db.query(sql, function (err, data, fields) {
      if (err) throw err;
        res.render('people-list', { title: 'People List', peopleData: data});
    });
  }
);
module.exports = router;
