const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const playerRouter = require("./routes/player");

const corsOptions = {
  origin: "https://streetculture.center/",
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/player", playerRouter);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
