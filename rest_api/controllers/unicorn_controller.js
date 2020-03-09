const Unicorns = require('../models/Unicorn');
let controller = {};

controller.findAll = async (req, res, next) => {
	try {
		res.json(await Unicorns.find());
	} catch (e) {
		next(e);
	}
};

controller.findById = async (req, res, next) => {
	try {
		res.json(await Unicorns.findById(req.params.id));
	} catch (e) {
		next(e);
	}
};

controller.create = async (req, res, next) => {
	try {
		res.status(201).json(await Unicorns.create(req.body));
	} catch (e) {
		next(e);
	}
};

controller.update = async (req, res, next) => {
	try {
		res.status(200).json(
			await Unicorns.findByIdAndUpdate(req.params.id, { $push: { forests: req.body.forests } },
				{
					new: true,
					useFindAndModify: false
				}
			)
		);
	} catch (e) {
		next(e);
	}
};

controller.delete = async (req, res, next) => {
	try {
		res.status(204).json(await Unicorns.findByIdAndRemove(req.params.id));
	} catch (e) {
		next(e);
	}
};

module.exports = controller;
