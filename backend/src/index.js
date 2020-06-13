const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(morgan(''));
app.use(require('./routes'));

app.listen(3000)