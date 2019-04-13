const db = require('../utils/DBHelper')
//登陆
const userLogin = userInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from users where username = ? and password = ?`
			cn.query(sql,[userInfo.username,userInfo.password], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
//注册
const userSignin = userInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `INSERT INTO users (username, password) VALUES (?, ?);`
			cn.query(sql,[userInfo.username,userInfo.password], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}


let s = {
    userLogin,
    userSignin
}

module.exports = s