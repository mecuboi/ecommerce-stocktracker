# Stock Tracker for your business

## Description

This is a node application to help you keep track of your stocks. On top of that it also gives you the ability to sort out your stocks by categories and tags to improve user experience when they are searching for an item in your online shop. Easing the user experience with an advanced backend database system.

## Installation

Install the prerequisite package by running the command below:
```
npm i
```

After that you need to get the .env.EXAMPLE file and remove the .EXAMPLE from the name. Then fill in the username and password of your mysql inside the single quotes.

Then you would need to seed the data into the database to run some testing. Use the command below:
```
node seeds/index.js
```

## Run

To run the app, use the command below:
```
npm start
```

## Usage

Once the application is up and running, you can test out the database using insomnia. Do a GET, PUT, POST, DELETE request using the different API routes. The routes consist of:
- /api/products
- /api/tags
- /api/categories

for PUT, POST, and DELETE request, you need to put the id after the api routes. E.g. /api/products/1

Or if you want to GET the specific 1 object, you can do the same with the GET request.

More details of how it works is shown in the video walkthrough below.


## Video Walkthrough

https://drive.google.com/file/d/1uRbMObCH8zIPOFCagu2hCDm0mM1eg_eL/view

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mecuboi/ecommerce-stocktracker/blob/main/LICENSE)


## Questions

Reach out to me using the links below:

GitHub: [@mecuboi](https://github.com/mecuboi)

Email: matthewd.jusuf@gmail.com

