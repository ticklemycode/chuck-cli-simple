#!/usr/bin/env node

// https://api.chucknorris.io/jokes/random

const fs = require('fs');
const path = require('path');

// __dirname: The directory name of the current module.

fs.readFile(path.resolve(__dirname,'chuck.txt'), (err, data) => {
  const facts = data.toString().split('\n');
  const fact = facts[Math.floor(Math.random() * facts.length)];
  console.log(fact);
});

// could just move this as is to `mv chuck /usr/local/bin