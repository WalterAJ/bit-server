const db = require('../utils/DBHelper')
const getUnCheckedOrders = num => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select orders.*, address.address from orders left join address on address.id = orders.addressId where state='uncheck' order by startTime desc limit 0, ${num}`//查询状态为待接单订单
			cn.query(sql, null, (err, rs) => {//连接数据库查询
				if (err) throw err
				resolve(rs);
				cn.release()
			})
		})
	})
}
const currentOrder = orders => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			let sql = ''
			let ids = []
			if (err) throw err
			for (let i = 0; i < 2; i++) {
				let order = orders[i]
				if (order) {
					ids.push(order.id)
				}
				sql = `update orders set state = '当前订单' where id = ? || id = ?`
			}
			cn.query(sql, ids, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const completeOrder = (order, OID) => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `update orders set state = '已完成', detail = ?, toId = '${OID}' where id = ?`
			cn.query(sql, [order.detail, order.id], (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const getCurrentOrders = OID => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from orders where state = '当前订单' and toId = ?`
			cn.query(sql, OID, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const getCompleteOrders = OID => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select orders.*, address.address from orders left join address on address.id = orders.addressId where state = '已完成' and toId = ?`
			cn.query(sql, OID, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const addOrder = order => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `insert into orders set ?`
			cn.query(sql, order, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const getAddress = id => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			let sql = `select * from address where id = ?`
			cn.query(sql, id, (err, rs) => {
				if (err) throw err
				resolve(rs)
				cn.release()
			})
		})
	})
}

const getUserCompleteOrders = id => {
	return new Promise((resolve, rej) => {
		db.getConnection((err, cn) => {
			if (err) throw err
			
			let sql = `select * from orders where fromId = ?`
			cn.query(sql, id, (err, rs) => {
				if (err) throw err
				console.log(rs)
				resolve(rs)
				cn.release()
			})
		})
	})
}

let s = {
	getUnCheckedOrders,
	currentOrder,
	completeOrder,
	getCurrentOrders,
	addOrder,
	getAddress,
	getCompleteOrders,
	getUserCompleteOrders,
}

module.exports = s