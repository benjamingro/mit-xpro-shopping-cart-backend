# Back-end Server Application for Week 19 Shopping Cart Exercise
This is back-end server application for my solution to the Week 19 Shopping Cart Exercise. 
It is deployed as an App Engine App in a Google Cloud Platform (GCP) Project. 
The GCP Project contains three components.
* **App Engine App** - API with HTTPS endpoints and integration with mySQL
* **mySQL Database** - contains the product data
* **Cloud Storage** - contains product images 

This project was bootstrapped from the following projects in the [Google Cloud Platform NodeJS App Engine repository](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine).

* [hello-world](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine/hello-world/standard) - used for basic project structure and function prototypes

* [cloud-sql](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/cloud-sql/mysql/mysql) - adapted code from this repository to configure and communicate with mySQL database. The app.yaml file in this reposity was used as a template for configuring the mySQL connection. For this project, the app.yaml file is in .gitignore because it has sensitive configuration data.

### GraphQL
GraphQL was implemented in this app as part of the Week 20 exercise. You can access the GraphQL interface at [https://mit-xpro-319116.uc.r.appspot.com/graphql](https://mit-xpro-319116.uc.r.appspot.com/graphql). Below is an example query that you can run to retrieve product data. 
```
query{
  ProductList
  	{
      ProductName,
      Price,
      Price_unit,
      Instock,
      Instock_unit,
      Country,
      ImageUrl
    }
}
```
## Cloud SQL
The [Inventory folder](https://github.com/benjamingro/mit-xpro-shopping-cart-backend/tree/main/Inventory) contains the files used to build the mySQL database. 
* **data scheme** - Inventory8.ods
* **raw data** - Inventory8.csv 



## App Engine Quickstart 

* [Setup](#setup)
* [Running locally](#running-locally)
* [Deploying to App Engine](#deploying-to-app-engine)
* [Running the tests](#running-the-tests)

### Setup

Before you can run or deploy the sample, you need to do the following:

1.  Refer to the [appengine/README.md][readme] file for instructions on
    running and deploying.
1.  Install dependencies:

        npm install

### Running locally

    npm start

### Deploying to App Engine

    gcloud app deploy

