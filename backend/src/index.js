const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')


mongoose.connect(
  "mongodb+srv://rafael:116213rb@cluster0-ccbyw.mongodb.net/simple_upload?retryWrites=true&w=majority",
  {useNewUrlParser: true, useUnifiedTopology : true}
)

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(morgan(''));
app.use(require('./routes'));

app.listen(3000)