const server = require('../server/addressServer')


const getAllAddresses = async (req, res, next) => {
	try {
		server.getAllAddresses().then(v => {
			console.log('get')
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}

const addAddress = async (req, res, next) => {
	try {
		const address = req.body.address
		server.addAddress(address).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}
let c = {
	getAllAddresses,
	addAddress
}

module.exports = c