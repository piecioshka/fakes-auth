const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

const users = [{ email: "admin@gmail.com", password: "admin" }];

function decodeToken(token) {
  return Buffer.from(token, "base64").toString("utf-8");
}

function authenticate(email, password) {
  return (
    users.find((user) => {
      return user.email === email && user.password === password;
    }) !== undefined
  );
}

app.get("/", (req, res) => {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  const decodedToken = decodeToken(token);
  const [email, password] = decodedToken.split(":");
  const status = authenticate(email, password);
  res.set({ "content-type": "application/json" }).send({ status }).end();
});

app.get("/users", (_, res) => {
  res.set({ "content-type": "application/json" }).send({ users }).end();
});

app.post("/", (req, res) => {
  const count = users.length;
  users.push({ email: req.body.email, password: req.body.password });
  const status = count < users.length;
  res.set({ "content-type": "application/json" }).send({ status }).end();
});

app.listen(PORT, () => {
  console.log(`Server was started at http://${HOST}:${PORT}`);
});
