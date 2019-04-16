const server = require('../server/ydServer')


const addYd = async (req, res, next) => {
	try {
        let ydInfo = req.body;
		server.addYd(ydInfo).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}

const buyYd = async (req, res, next) => {
	try {
        let ydInfo = req.body;
		server.buyYd(ydInfo).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}
const getYd = async (req, res, next) => {
	try {
		server.getYd().then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}
let c = {
	addYd,
    buyYd,
    getYd
}

module.exports = c