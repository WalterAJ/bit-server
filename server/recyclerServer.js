const db = require('../utils/DBHelper')
//登陆
const recyclerLogin = userInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from recycler where username = ? and password = ?`
			cn.query(sql,[userInfo.username,userInfo.password], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
//注册
const recyclerSignin = userInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
            if (err) throw err
            console.log(userInfo)
			let sql = `INSERT INTO recycler (username, password) VALUES (?, ?);`
			cn.query(sql,[userInfo.username,userInfo.password], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}


let s = {
    recyclerLogin,
    recyclerSignin
}

module.exports = s