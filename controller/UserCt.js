const server = require('../server/userServer')


const userLogin = async (req, res, next) => {
	try {
        let userInfo = req.query;
        console.log(userInfo)
		server.userLogin(userInfo).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}

const userSignin = async (req, res, next) => {
	try {
        let userInfo = req.body;
        console.log(req.body)
		server.userSignin(userInfo).then(v => {
			res.status(200).send(v)
		})
	} 
	catch (err) {
		console.log(err)
	}
}
let c = {
	userLogin,
	userSignin
}

module.exports = c