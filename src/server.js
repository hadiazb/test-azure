const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res, next) => {
	res.send({
		message: 'Hello world',
	});
});

app.listen(process.env.PORT, () => {
	console.log(`Running on port:: ${process.env.PORT}`);
});
