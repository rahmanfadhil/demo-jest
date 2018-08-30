const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyparser.json());
app.use(cors());

app.get("/user", (req, res) => {
  res.send({
    name: "Rahman Fadhil",
    email: "rhmnfadhil@gmail.com"
  });
});

app.post("/user", (req, res) => {
  res.send({
    name: req.body.name,
    email: req.body.email
  });
});

app.listen(3000, () => {
  console.log("server jalan");
});
