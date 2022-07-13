const path = require("path");
const express = require("express");
const app = express();
//module.exports = app;

// Include our routes!
app.use("/api", require("./api"));
app.use("/users", require("./api/users"));

// Send index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const error = new Error("Not found");
    res.status(404);
    next(error);
  } else {
    next();
  }
});

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// Server port
const PORT = process.env.PORT || 1337;
try {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} | http://localhost:${PORT}/`);
  });
} catch (error) {
  console.log(error);
}
