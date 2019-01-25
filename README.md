# haveibeenpwned-checker
[![npm version](https://img.shields.io/npm/v/haveibeenpwned-checker.svg?label=haveibeenpwned-checker)](https://www.npmjs.com/package/haveibeenpwned-checker)

Pwned Passwords check passwords if they have previously been exposed in data breaches.
Using PwnedPasswords API by Troy Hunt (haveibeenpwned.com).

## DEMO
[Live Demo](https://repl.it/@MikeShaker/haveibeenpwned-checker)

## Installation

```sh
npm i haveibeenpwned-checker
```

## Usage
```js
const isPasswordPwned = require('haveibeenpwned-checker');


// password : password string to check//
// callback: callback method 
//timeout -(optional) by default it's 3000 ms integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request. 

isPasswordPwned('password', this.passwordPwnedCallback, 1000);

//Return Object
// { error: string, failed: boolean, count: number }
// error: error message if encounter an error.
// failed: boolean flag to indicate if call/api failed
// count: count of how many times it appears in breaches.
function passwordPwnedCallback (e){
   console.log(e);
   //{ error: '', failed: false, count: 3645804 }
}
