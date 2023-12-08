const Questions = require('../../component/Questions');
const { Question, User } = require('../../db/models');

console.log(Question, User, " !!!!!!!!!!!!!!!!!!!!!!!!!1");

const router = require('express').Router();

router.get('/:index/theme/:themesId', async (req, res) => {
  try {
    const { index, themesId } = req.params;

    console.log(req.params, '&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    const questions = await Question.findAll({ where: { themeId: +themesId } });
    console.log(questions, '%%%%%%%%%%%%%');
    if (questions[index]) {
      const html = res.renderComponent(Questions, {
        question: questions[index],
        index: Number(index) + 1,
      });
      res.send(html);
    } else {
      res.redirect('/theme');
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: res.app.locals.user.id } });
      const { answer, id } = req.body;
      const question = await Question.findOne({ where: { id } });
      if (answer.toLowerCase() === question.answer.toLowerCase()) {
        user.score = Number(user.score) + 100;
        await user.save();
        res.app.locals.user.score = user.score
        res.json({message: 'Правильный ответ'})
      }else{
        user.score = Number(user.score) - 100;
        await user.save();
        res.app.locals.user.score = user.score
        res.json({message: `Не верный ответ ${question.answer}`})
      }
    } catch (message) {
      console.log(message.message);
    }
  });


  module.exports = router