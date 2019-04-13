const server = require('../server/recyclerServer')


const recyclerLogin = async (req, res, next) => {
	try {
        let userInfo = req.query;
        console.log(userInfo)
		server.recyclerLogin(userInfo).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(1)
		console.log(err)
	}
}

const recyclerSignin = async (req, res, next) => {
	try {
        let userInfo = req.body;
        console.log(req.body)
		server.recyclerSignin(userInfo).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}
const recyclerGetAll = async (req, res, next) => {
	try {
        let userInfo = req.query;
        console.log(userInfo)
		server.recyclerGetAll(userInfo).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(1)
		console.log(err)
	}
}
let c = {
	recyclerLogin,
	recyclerSignin,
	recyclerGetAll
}

module.exports = c