const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(morgan("dev"));

const users = [{ login: "admin", pass: "admin" }];

function decodeToken(token) {
  return Buffer.from(token, "base64").toString("utf-8");
}

function auth(login, pass) {
  return (
    users.find((user) => {
      return user.login === login && user.pass === pass;
    }) !== undefined
  );
}

app.get("/", (req, res) => {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  const decodedToken = decodeToken(token);
  const [login, pass] = decodedToken.split(":");
  const status = auth(login, pass);
  res.json({ auth: status });
});

app.listen(PORT, () => {
  console.log(`Server was started at http://${HOST}:${PORT}`);
});
