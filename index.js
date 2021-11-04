const express = require("express");
const App = express();
const path = require("path");
require("dotenv").config();
const cors = require("cors");

App.use(express.json());
App.use(cors());

const PORT = process.env.PORT || 4500;

App.get("/api", (req, res) => {
  res.json({});
});

if (process.env.NODE_ENV === "production") {
  App.use(express.static("client/build"));

  App.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

App.listen(PORT, () => console.log(`Server started at ${PORT}`));
