require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  const headers = req.headers
  res.json({"ipaddress": headers.host, "language": headers["accept-language"], "software": headers["user-agent"]})
})

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
