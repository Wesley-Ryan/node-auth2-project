const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("../api/auth/auth-router");
const userRouter = require("../api/users/user-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("tiny"));

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (_, res) => {
  res.json("server is up");
});

module.exports = server;
