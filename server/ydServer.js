const db = require('../utils/DBHelper')
//登陆
const getYd = () => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from yd `
			cn.query(sql, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
//注册
const addYd = ydInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `INSERT INTO yd (num, price) VALUES (?, ?);`
			cn.query(sql,[ydInfo.num,ydInfo.price], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const buyYd = ydInfo => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `DELEET from yd where id = ?`
			cn.query(sql,ydInfo.id, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}
let s = {
    addYd,
    buyYd,
    getYd
}

module.exports = s