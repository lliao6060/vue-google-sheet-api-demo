const express = require('express');

const app = express();
const port = process.env.PORT || 8090;

app.get(/js|css|img/, (req, res) => {
  res.sendFile(`${__dirname}/${req.path}`);
});

app.get(/\//, (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port);