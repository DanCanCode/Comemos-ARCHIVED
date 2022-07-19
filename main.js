const app = require("./server");

// Server port
const PORT = process.env.PORT || 1337;
try {
  app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(error);
}
