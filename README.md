# haveibeenpwned-checker ![](https://img.shields.io/github/last-commit/mikeshaker/haveibeenpwned-checker.svg?style=flat-square)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/haveibeenpwned-checker.svg?label=haveibeenpwned-checker)](https://www.npmjs.com/package/haveibeenpwned-checker)
[![Build Status](https://travis-ci.org/mikeshaker/haveibeenpwned-checker.svg?branch=master)](https://travis-ci.org/mikeshaker/haveibeenpwned-checker)
[![NPM Downloads](https://img.shields.io/npm/dt/haveibeenpwned-checker.svg?style=flat)](https://www.npmjs.com/package/haveibeenpwned-checker)
(https://badges.greenkeeper.io/mikeshaker/haveibeenpwned-checker.svg)](https://greenkeeper.io/)


Pwned Passwords check passwords, email addresses, and usernames if they have previously been exposed in data breaches.
Using APIs by **Troy Hunt (haveibeenpwned.com)**.

## Demo
[Live Demo 1](https://runkit.com/mikeshaker/5c5499162cc0b70012c1f73b)
OR 
[Live Demo 2](https://repl.it/@MikeShaker/haveibeenpwned-checker-v042)

## Installation

```sh
npm i haveibeenpwned-checker
```

## Usage
```js
const HIBP = require("haveibeenpwned-checker");

## Passwords
// password : password string to check//
// callback: callback method 
// timeout -(optional) by default it's 3000 ms integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.

HIBP.PasswordChecker('Abcd1234$',myCallback, TIME_OUT);

##Accounts
   #Rate limiting: based on the rate limit by https://haveibeenpwned.com (one per every 1500 milliseconds each from any given IP address)
// Account : email addres/username
// callback: callback method 
// timeout -(optional) by default it's 3000 ms integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.
HIBP.AccountChecker('test@test.com',myCallback, TIME_OUT);

//Return Object
// { error: string, failed: boolean, count: number }
// error: error message if encounter an error.
// success: boolean flag to indicate if call/api failed
// count: count of how many times it appears in breaches.
function passwordPwnedCallback (e){
   console.log(e);
   //{ error: '', success: true, count: 3645804 }
}
