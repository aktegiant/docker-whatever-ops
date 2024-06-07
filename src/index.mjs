import express from "express";
import winston from "winston";
import expressWinston from "express-winston";
import mongoose from "mongoose";
import redis from "redis";
import path from "path";

const app = express();
const port = process.env.PORT;

// Configure express-winston to log to a file
app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true,
      }),
    ],
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
