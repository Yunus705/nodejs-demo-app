// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js App with CI/CD 🚀");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
