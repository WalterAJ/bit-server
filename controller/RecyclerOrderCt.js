const server = require('../server/orderServer')
const getUncheckedOrders = async (req, res, next) => {
	try {
		let { needLength, OID } = req.body;
		let orders = await server.getUnCheckedOrders(needLength);
		
		let _os = []
		for (let i = 0; i < orders.length; i++) {
			let _o = orders[i]
			if (_o) {
				_os.push(_o)
				if (_os.length && _os.length % 2 == 0) {
					await server.currentOrder(_os)
					_os = []
				}
			}
		}
		if (_os.length == 1) {
			let _o = _os[0]
			_os.push(_o)
			await server.currentOrder(_os)
		}
		let SID = users[OID]
		res.status(200).send(orders)
	} 
	catch (err) {
		console.log(err)
	}
}

const completeOrder = async (req, res, next) => {
	try {
		let { order, OID } = req.body
		let rs = await server.completeOrder(order, OID)
		res.send(rs)
	} 
	catch (err) {
		console.log(err)
	}
}

const getCurrentOrders = async (req, res, next) => {
	try {
		let { OID } = req.body
		let rs = await server.getCurrentOrders(OID)
		res.status(200).send(rs)
	} 
	catch (err) {
		console.log(err)
	}
}

const changeCurrentOrders = async (req, res, next) => {
	try {
		let { OID, orders } = req.body
		console.log('改变状态', OID, orders)
		let rs = await server.currentOrder(orders, OID)
		res.status(200).send(rs)
	} 
	catch (err) {
		console.log(err)
	}
}

const getCompleteOrders = async (req, res, next) => {
	try {
		let { OID } = req.body
		let rs = await server.getCompleteOrders(OID)
		res.status(200).send(rs)
	} 
	catch (err) {
		console.log(err)
	}
}


let c = {
	getUncheckedOrders,
	completeOrder,
	getCurrentOrders,
	changeCurrentOrders,
	getCompleteOrders
}

module.exports = c