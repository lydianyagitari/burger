//  Node Dependencies
var connection = require('./connection.js');

// Connecting to mydb
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});


// MySQL db cmd methods
var orm = {

  // selectAll()
  selectAll: function(callback) {
  // doing select Query
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
      });

 },
  // insertOne()
  

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });

  }

};



// Export the ORM object in module.exports.
module.exports = orm;
