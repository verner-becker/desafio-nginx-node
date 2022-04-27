var mysql = require('mysql');
var conn = mysql.createConnection({
	  host: 'db', 
	  user: 'root',      
	  password: 'root',    
	  database: 'nodedb'
}); 
conn.connect(function(err) {
	  if (err) throw err;
	  console.log('Database is connected successfully !');
});
module.exports = conn;
