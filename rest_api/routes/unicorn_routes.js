const router = require('express').Router();
const controller = require('../controllers/unicorn_controller.js.js');

router.get('/', controller.findAll);

router.get('/:id', controller.findById);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
