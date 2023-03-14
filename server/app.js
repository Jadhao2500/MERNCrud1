const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./database/db.js");
const route = require("./routes/route.js");

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use("/", route);

const port = 8000;

mongoose.set("strictQuery", true);

connection();

app.listen(port, () => {
  console.log(`server is runnig succesfully on port ${port}`);
});
