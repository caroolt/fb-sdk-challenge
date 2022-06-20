/* eslint-disable @typescript-eslint/no-var-requires */
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const userRouter =require('./routes/userData');
const fbRouter = require('./routes/fbData');

app.use(bodyParser.json());

app.use(userRouter);
app.use(fbRouter);

app.listen(3001, (err: Error) => {
	if (err) console.error('Error in server setup');
	console.log('Server listening on Port', 3001);
});


