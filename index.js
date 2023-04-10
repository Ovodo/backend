const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("this is awesome");
});   

app.listen(port, () =>
  console.log(
    `Your Server don start to dey run on port: ${port}  oya start work!!!1`
  )
);

module.exports = app;

