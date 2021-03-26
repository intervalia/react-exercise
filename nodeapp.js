const express = require('express');
const ejs = require('ejs');
const request = require('request');
const cors = require('cors');
const app = express();
const PORT = 4444;

app.use(cors());
app.use(express.static('dist'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/representatives/:state',
  findRepresentativesByState
);

app.get('/senators/:state',
  findSenatorsByState
);

function findRepresentativesByState(req, res, next) {
  const url = `http://whoismyrepresentative.com/getall_reps_bystate.php?state=${req.params.state}&output=json`;
  request(url, handleApiResponse(res, next));
}

function findSenatorsByState(req, res, next) {
  const url = `http://whoismyrepresentative.com/getall_sens_bystate.php?state=${req.params.state}&output=json`;
  request(url, handleApiResponse(res, next));
}

function handleApiResponse(res, next) {
  return (err, response, body) => {
    let resp;
    if (err || body[0] === '<') {
      resp = {
        success: false,
        error: err || 'Invalid request. Please check your state variable.'
      };
    }
    else {
      resp = {
        success: true,
        results: JSON.parse(body).results
      };
    }

    res.json(resp);
  };
}

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('API listening at http://%s:%s', host, port);
});
