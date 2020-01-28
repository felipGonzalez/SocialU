var express = require('express');
var app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const format = require('string-format');
const themeInterestRouter = require('./models/ThemeInterest');
const publicationRouter = require('./models/Publication');
const userRouter = require('./models/users');

app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/themeInterest', themeInterestRouter);
app.use('/user', userRouter);
app.use('/publication', publicationRouter);


app.listen(app.get('port'), function () {
  console.log('Servidor iniciado en el puerto 3000');
});
