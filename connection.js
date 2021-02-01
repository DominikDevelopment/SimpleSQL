var mysql = require('mysql');
let json = require('./sqlconnection.json');

function createConnection() {
    return  mysql.createConnection({
        host: json.host,
        user: json.user,
        password: json.password,
        insecureAuth : true
      
      });
}


function Selectuser(email, password, callback) {
    const con = createConnection();
    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM ${json.table} where email='${email}' and password='${password}'`, function (err, result, fields) {
          if (err) {
            console.log(err);  
            throw err;
            }
          callback(result)
        });
      });
}
function Insertuser(name, email, password, role, callback) {
  const con = createConnection();
  con.connect(function(err) {
    if (err) throw err;
    console.log("joined!");
    var sql = `INSERT INTO ${json.table} (name, email, password, role) VALUES ('${name}', '${email}', '${password}', '${role}')`;
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);  
        throw err;
        }
      callback(result)
    });
  });
}
function Deleteuser(name) {
  const con = createConnection();
  con.connect(function(err) {
    if (err) throw err;
    console.log("joined!");
    var sql = `DELETE FROM ${json.table} WHERE name = '${name}'`;
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);  
        throw err;
        }
      callback(result)
    });
  });
}
function Updateuser(id, name, email, password, role) {
  const con = createConnection();
  con.connect(function(err) {
    if (err) throw err;
    console.log("joined!");
    var sql = `UPDATE ${json.table} SET name = '${name}', email = '${email}', password = '${password}', role = '${role}' WHERE id = '${id}'`;
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);  
        throw err;
        }
      callback(result)
    });
  });
}

exports.Selectuser = Selectuser
exports.Insertuser = Insertuser
exports.Deleteuser = Deleteuser
exports.Updateuser = Updateuser