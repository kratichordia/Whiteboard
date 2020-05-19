var server = require('./server');

server.start();

var fruits = ["apples", "oranges"];
fruits.forEach(function(i, fruit) {
  console.log(i + ": " + fruit);
});

 var lodash = require("lodash");
