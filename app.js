require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/ssr');

const serverConfig = require('./config/serverCofnig');

const indexRouter = require('./routes/index.routes');

const app = express();

serverConfig(app);

app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //даем разрешение на чтение данных из body из формы
app.use(express.static(path.join(__dirname, './public'))); // для обслуживания статических файлов css

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT}`);
});
