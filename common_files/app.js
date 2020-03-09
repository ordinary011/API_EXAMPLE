const express = require('express');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json('hi bro')
})


const doctorRouter = require('./routes/doctorRouter.js');

app.use('/doctor', doctorRouter);


app.use('*', (req, res) => {
	res.status(404).json('The page does not exist');
});

app.listen(3000, () => {
	console.log('Listening to the port 3000');
});