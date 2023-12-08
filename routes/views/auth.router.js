const router = require('express').Router();
const { User } = require('../../db/models');
const Registartion = require('../../component/FormRegistration');

router.get('/', (req, res) => {
  const html = res.renderComponent(Registartion, {
    title: 'Регистрация',
  });
  res.send(html);
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const user = await User.create({ name });
      res.app.locals.user = user;
      console.log(res.app.locals, 'dwfewferferfg');
      res.status(200).send({ message: 'success', user });
    } else {
      res.status(400).send('заполните все поля');
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});
module.exports = router;
