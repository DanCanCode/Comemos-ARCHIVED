const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("hello posts");
});

module.exports = router;
