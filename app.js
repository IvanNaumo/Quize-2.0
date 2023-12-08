require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('./middleware/ssr');
const { User } = require('./db/models');
const serverConfig = require('./config/serverConfig');
const register = require('./component/FormRegistration');

// const indexRouter = require('./routes/index.router');

const app = express();

serverConfig(app);

app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //даем разрешение на чтение данных из body из формы
app.use(express.static(path.join(__dirname, './public'))); // для обслуживания статических файлов css

// app.use('/', indexRouter);

const PORT = 3000;
app.get('/', (req, res) => {
  const html = res.renderComponent(register, {
    title: 'Регистрация',
  });
  res.send(html);
});
app.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const user = await User.create({ name });
      res.locals.user = user;
      // res.redirect('/themes');
    } else {
      res.status(400).send('заполните все поля');
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT}`);
});
