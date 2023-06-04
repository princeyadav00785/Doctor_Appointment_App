const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server running",
  });
});

const port = process.env.PORT || 8080;
const nodeEnv = process.env.NODE_ENV || "development";

app.listen(port, () => {
  console.log(`Server running in ${nodeEnv} mode on port ${port}`.bgCyan.white);
});
