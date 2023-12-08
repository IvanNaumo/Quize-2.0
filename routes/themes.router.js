const express = require('express');
const router = express.Router();

const { Theme } = require('../db/models');
const Themes = require('../component/Theme');

// router.get('/', async (req, res) => {
//   const users = await Theme.findAll();
//   res.json(users);
// });

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    console.log(themes);

    const html = res.renderComponent(Themes, {
      title: 'Theme',
      themes,
    });
    console.log(html);

    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

module.exports = router;
