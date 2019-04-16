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
			let sql = `INSERT INTO recycler (username, password, yd, balance) VALUES (?, ?,?,?);`
			cn.query(sql,[userInfo.username,userInfo.password,200,300.00], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const recyclerGetStation = () => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from station`
			cn.query(sql,(err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
const setVariety = varietyInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
            if (err) throw err
			let sql = `update recycler set variety = ?,selVariety = ? where username = ?;`
			cn.query(sql,[varietyInfo.variety,varietyInfo.selVariety,varietyInfo.username], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
const recyclerModify = userInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
            if (err) throw err
			let sql = `update recycler set password = ? where username = ?;`
			cn.query(sql,[userInfo.password,userInfo.username], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
let s = {
    recyclerLogin,
	recyclerSignin,
	recyclerGetStation,
	setVariety,
	recyclerModify
}

module.exports = s