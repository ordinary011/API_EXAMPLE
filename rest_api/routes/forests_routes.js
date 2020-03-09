const Forests = require('../models/Forest.js.js');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await Forests.find());
	} catch (e) {
		next(e);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		res.json(await Forests.findById(req.params.id));
	} catch (e) {
		next(e);
	}
});

router.post('/', async (req, res, next) => {
	try {
		res.status(201).json(await Forests.create(req.body));
	} catch (e) {
		next(e);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		res.status(200).json(
			await Forests.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				useFindAndModify: false
			})
		);
	} catch (e) {
		next(e);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		res.status(204).json(await Forests.findByIdAndRemove(req.params.id));
	} catch (e) {
		next(e);
	}
});

module.exports = router;
