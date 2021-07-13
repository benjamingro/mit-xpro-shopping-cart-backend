# Back-end Server Application for Week 19 Shopping Cart Exercise
This is back-end server application for my solution to the Week 19 Shopping Cart Exercise. 
It is deployed as an App Engine App in a Google Cloud Platform (GCP) Project. 
The GCP Project contains three components.
* **App Engine App** - API with HTTPS endpoints and integration with mySQL
* **mySQL Database** - contains the product data
* **Cloud Storage** - contains product images 

This project was bootstrapped from the following projects in the [https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine](Google Cloud Platform NodeJS App Engine repository).

* [hello-world](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine/hello-world/standard) - used for basic project structure and function prototypes

* [cloud-sql](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/cloud-sql/mysql/mysql) - adapted code from this repository to configure and communicate with mySQL database. The app.yaml file in this reposity was used as a template for configuring the mySQL connection. For this project, the app.yaml file is in .gitignore because it has sensitive configuration data.




## Quickstart 

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

