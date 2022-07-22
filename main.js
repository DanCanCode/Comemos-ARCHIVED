const app = require("./server");
const { db } = require("./server/database");

// Server port
const PORT = process.env.PORT || 1337;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
