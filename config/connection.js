var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection=mysql.createConnection({
    host: 'pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'i0h1yb9s1wpbhbeu',
    password: 'yxo2julxy39s3jen',
    database: 'nraiva33s7h8yrce'
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;