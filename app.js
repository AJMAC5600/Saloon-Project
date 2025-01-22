const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("pages/home", { title: "Home Page" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
