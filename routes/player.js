const { log } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const trackFilePath = path.resolve(__dirname, "../now-playing.json");

router.post("/track", (req) => {
  log(req.body);

  fs.writeFileSync(trackFilePath, JSON.stringify(req.body));
});

router.get("/track", (_, res) => {
  const data = fs.readFileSync(trackFilePath);

  res.json(JSON.parse(data));
});

module.exports = router;
