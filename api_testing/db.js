const mysql = require("mysql2");

const connection = mysql.createPool({
  // connectionLimit : 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});
async function getUser(username) {
  const [row] = await connection
    .promise()
    .query(`select * from users where username = ?`, [username]);
  return row[0];
}
async function createUser(username, password) {
  const insertId = await connection
    .promise()
    .query(`insert into users (username,password),values(?,?) `, [
      username,
      password,
    ]);
  return insertId;
}

module.exports = { getUser, createUser };
