if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("open", () => console.log("Connected to mongoose"));

const PORT = 3000;

const indexRouter = require("./routes/index");

app.get("/", (req, res) => {
  res.status(200).send({
    status: "Active",
  });
});

app.use("/index", indexRouter);

app.listen(PORT, (req, res) => console.log("App alive at port 3000"));
