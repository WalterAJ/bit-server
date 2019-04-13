const server = require('../server/orderServer')
const pushOrder = async (req, res, next) => {
	try {
		let fromIDS = {
			wyq: `oEwij0-ryS8R56w2xWriEFaKejiU`,
			wd: `oEwij06p7u8GpwVw6NSk7xWZ2dIU`
		}
		let toIDS = {
			wj: `oEwij06DcL-vVQlbvDqtRq9Bhzv0`,
			lhr: `oEwij0z6VEeRMKKCN21nEaOQgThM`
		}
		let fid = Math.random() > 0.5 ? fromIDS.wyq : fromIDS.wd
		// let o = {
		// 	state: '代接单',
		// 	detail: `{"废报纸":12,"废纸板":20}`,
		// 	fromId: fid,
		// 	address: '喆喆喆喆那那那那那',
		// 	startTime: '2018-01-02 12:21:00'
		// }
		let o = req.body.order
		let OID
		let SID
		console.log(global.users)
		if (o.fromId == fromIDS.wd) {
			OID = toIDS.lhr
		}
		else {
			OID = toIDS.wj
		}
		SID = users[OID]
		let values = await server.addOrder(o)
		let address = await server.getAddress(o.addressId)
		o.address = address[0].address
		io.sockets.to(SID).emit('newOrders', {
			orders: o
		})
		res.send(values)
	}
	catch (err) {
		console.log(err)
	}
}

const getCompletedOrders = async (req, res, next) => {
	try {
		let { OID } = req.body
		console.log('1')
		let os = await server.getUserCompleteOrders(OID)	
		res.send(os)
	} 
	catch (err) {
		
	}
}


let c = {
	pushOrder,
	getCompletedOrders
}

module.exports = c