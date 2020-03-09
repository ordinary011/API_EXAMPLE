const express = require('express');
const mongoose = require('mongoose');
const ForestsRouter = require('./routes/forests_routes.js.js');
const UnicornsRouter = require('./routes/unicorn_routes.js.js');

mongoose.connect('mongodb://localhost:27017/wood', { useNewUrlParser: true });
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/forests', ForestsRouter);
app.use('/api/unicorns', UnicornsRouter);

app.get('/', async (req, res, next) => {
	// next(new Error('palma'))
	res.end('hm page');
});

app.use((err, req, res, next) => {
	console.log(err);
	res.end('sorry there is an error');
});

app.listen(3000, () => console.log('Running on port 3000'));
