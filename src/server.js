const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
	res.send({
		message: 'Hello world',
	});
});

app.listen(8000, () => {
	console.log(`Running on port:: ${8000}`);
});
