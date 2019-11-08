const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const logger = require('../middleware/logger');

const projectRouter = require("../projects/project-router.js");
const resourceRouter = require('../resources/resource-router');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(cors());

server.use("/api/projects", projectRouter);
server.use('/api/resources', resourceRouter);

server.get("/", (req, res) => {
  res.send("<h1>🚀</h1>");
});

module.exports = server;