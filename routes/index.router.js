const router = require("express").Router();
// const questionsRouter = require("./views/questions.router");
const authRouter = require("./views/auth.router");
const themesRouter = require("./themes.router")



router.use("/theme", themesRouter);
router.use("/", authRouter);
// router.use("/questions", questionsRouter);


module.exports = router;