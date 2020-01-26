'use strict';

const express = require('express');
require('./db/mongoose'); // we did so because we only need to ensure that the file runs
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
