const express = require("express");
const { resolve } = require("path")
const restMockMiddleware = require('@devaway/rest-mock-middleware');
const cors = require('cors');

let app = express();

app.use('/api',
  cors(),
  restMockMiddleware({
  root_dir: resolve(__dirname, "../mocks")
}));

app.listen(3001);