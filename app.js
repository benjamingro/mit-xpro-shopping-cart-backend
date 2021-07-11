// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_node_request_example]
const express = require('express');

const databaseJs = require('./database');
const getHelloMessage = databaseJs.getHelloMessage;
const getAllProductData = databaseJs.getAllProductData;
const checkout = databaseJs.checkout;



const app = express();
const cors = require('cors');
app.use(cors());
// for consuming json post data
// app.use(express.bodyParser());

app.get('/', (req, res) => {
  const myHelloMessage = getHelloMessage();
  res.status(200).send(myHelloMessage).end();

  // res.status(200).send('Hello, world!').end();
});

app.get('/allproducts', (req, res) => {
  getAllProductData()
    .then(value => {
      res.status(200).send(value).end();

    })
    .catch(error => {
      res.status(200).send(error).end();

    });
});

app.post('/checkout', (req, res) => {
  console.log('inside /checkout'); 
  console.log(JSON.stringify(req.body)); 

  checkout(req.body)
    .then(value => {
      res.status(200).send(value).end();
     })
    .catch(error => { console.log(error) });
});

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
