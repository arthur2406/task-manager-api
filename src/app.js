'use strict';

const express = require('express');
require('./db/mongoose'); // we did so because we only need to ensure that the file runs
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
