const express = require('express');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');
const app = express();
const appEnv = cfenv.getAppEnv();
const distributionFolder = __dirname + '/../dist';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(distributionFolder));

app.listen(appEnv.port, function () {
  console.log('server starting on ' + appEnv.url);
});
