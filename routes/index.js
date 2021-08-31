const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from router index");
});

module.exports = router;
