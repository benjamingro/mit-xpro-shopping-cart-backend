

'use strict';

const express = require('express');

const databaseJs = require('./database');

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const getHelloMessage = databaseJs.getHelloMessage;
const getAllProductData = databaseJs.getAllProductData;
const checkout = databaseJs.checkout;
const replenish = databaseJs.replenish;

const app = express();
const cors = require('cors');
app.use(cors());
// for consuming json post data
app.use(express.json());

//this is just a "hello world" function, not used for the API: 
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

//this is the graphql version 
const schema = buildSchema(`
  type Query {
    ProductList:[Product]
  }

  type Product{
        ProductName: String,
        Price: Float,
        Price_unit: String,
        Instock: Int,
        Instock_unit: String,
        Country: String,
        Created_at: String,
        Updated_at: String,
        imageUrl: String,
        entryID:ID
  }

`);



const getAllProductData_graphQL = {
  me : async () =>{
    let allData= await getAllProductData();
    allData = {"ProductList":allData.slice()}; 
    console.log('inside getAllProductData_graphQL, allData = ');
    console.log(JSON.stringify(allData)); 
    return allData;  
  },
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: getAllProductData_graphQL,
  graphiql: true,
}));

app.get('/replenish',(req,res)=>{
  console.log('inside /replenish'); 
  replenish()
    .then(value => {
      res.status(200).send(value).end();

    })
    .catch(error => {
      res.status(200).send(error).end();

    });
});

app.post('/checkout', (req, res) => {
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
