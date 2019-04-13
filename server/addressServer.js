const db = require('../utils/DBHelper')
const getAllAddresses = () => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from address`
			console.log(sql)
			cn.query(sql, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const addAddress = a => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `insert into address set ?`
			cn.query(sql, a, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

let s = {
	getAllAddresses,
	addAddress
}

module.exports = s