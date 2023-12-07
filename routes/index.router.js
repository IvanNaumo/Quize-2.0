const router = require("express").Router();
const questionsRouter = require("./views/questions.routes");
const authRouter = require("./auth.route");
const themesRouter = require("./themes.route")



router.use("/themes", themesRouter);
router.use("/auth", authRouter);
router.use("/questions", questionsRouter);


module.exports = router;