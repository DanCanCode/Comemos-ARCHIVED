const router = require("express").Router();
const User = require("../database/models/users");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOn({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
