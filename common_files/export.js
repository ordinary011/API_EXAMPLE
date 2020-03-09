const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
	try {
        
		res.status(200).json({
			success: true,
			data: 'works'
		});
	} catch (e) {
		res.status(400).json({
			success: false,
			data: e.message
		});
	}
};