const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("This works!");
});

module.exports = router;
