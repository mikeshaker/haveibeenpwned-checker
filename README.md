# haveibeenpwned-checker
[![npm version](https://img.shields.io/npm/v/haveibeenpwned-checker.svg?label=haveibeenpwned-checker)](https://www.npmjs.com/package/haveibeenpwned-checker)
[![NPM Downloads](https://img.shields.io/npm/dt/haveibeenpwned-checker.svg?style=flat)](https://www.npmjs.com/package/haveibeenpwned-checker)


Pwned Passwords check passwords if they have previously been exposed in data breaches.
Using PwnedPasswords API by **Troy Hunt (haveibeenpwned.com)**.

## Demo
[Live Demo](https://runkit.com/mikeshaker/5c5499162cc0b70012c1f73b)

![haveibeenpwned-checker](./pwnedPwd.gif?raw=true "Examples")

## Installation

```sh
npm i haveibeenpwned-checker
```

## Usage
```js
const HIPB = require("haveibeenpwned-checker");

## Passwords
// password : password string to check//
// callback: callback method 
// timeout -(optional) by default it's 3000 ms integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.

HIPB.PasswordChecker('Abcd1234$',myCallback, TIME_OUT);

##Accounts
   #Rate limiting: based on the rate limit by https://haveibeenpwned.com (one per every 1500 milliseconds each from any given IP address)
// Account : email addres/username
// callback: callback method 
// timeout -(optional) by default it's 3000 ms integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.
HIPB.AccountChecker('test@test.com',myCallback, TIME_OUT);

//Return Object
// { error: string, failed: boolean, count: number }
// error: error message if encounter an error.
// success: boolean flag to indicate if call/api failed
// count: count of how many times it appears in breaches.
function passwordPwnedCallback (e){
   console.log(e);
   //{ error: '', success: true, count: 3645804 }
}
