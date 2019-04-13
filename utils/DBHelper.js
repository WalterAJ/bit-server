/**
 * Created by Alander on 2017/12/25.
 */
const mysql = require('mysql');

// 连接数据库
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'recycle',
  port: 3306
});


// pool.on('acquire', function (connection) {
//   console.log('Connection %d acquired', connection.threadId);
// });

// pool.on('connection', function (connection) {
//   console.log('创建连接')
// });

// pool.on('enqueue', function () {
//   console.log('进入等待');
// });
// pool.on('release', function (connection) {
//   console.log('Connection %d released', connection.threadId);
// });


module.exports = pool