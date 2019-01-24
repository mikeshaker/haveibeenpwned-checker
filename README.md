# haveibeenpwned-checker
Pwned Passwords check passwords if they have previously been exposed in data breaches.
Using PwnedPasswords API by Troy Hunt (haveibeenpwned.com).

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


function passwordPwnedCallback (e){
   console.log(e);
   //{ error: '', failed: false, count: 3645804 }
}
