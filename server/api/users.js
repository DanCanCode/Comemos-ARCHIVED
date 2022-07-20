const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("hello users");
});

module.exports = router;
