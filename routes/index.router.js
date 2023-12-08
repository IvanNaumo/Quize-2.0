const router = require("express").Router();
// const questionsRouter = require("./views/questions.router");
const authRouter = require("./views/auth.router");
const themesRouter = require("./themes.router")



router.use("/themes", themesRouter);
router.use("/auth", authRouter);
// router.use("/questions", questionsRouter);


module.exports = router;