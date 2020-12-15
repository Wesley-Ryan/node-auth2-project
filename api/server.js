const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("tiny"));

server.get("/", (_, res) => {
  res.json("server is up");
});

module.exports = server;
