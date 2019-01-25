const crypto = require('crypto');
const get = require('simple-get');


const PREFIX_LENGTH = 5;
const API_URL = 'https://api.pwnedpasswords.com/range/';
function isPasswordPwned(password, callbackMethod, timeout = 3000) {
  const hasCallback = typeof callbackMethod === 'function';

  if (typeof password !== 'string') {
    const err = new Error('Input password must be a string.');
    return hasCallback ? callbackMethod(err) : (err);
  }
  const hashedPassword = hash(password);
  const hashedPasswordPrefix = hashedPassword.substr(0, PREFIX_LENGTH);
  const hashedPasswordSuffix = hashedPassword.substr(PREFIX_LENGTH);

  var result = {
    error: "",
    success: true,
    count: 0,
    pwned: false
  };

  const opts = {
    url: API_URL + hashedPasswordPrefix,
    timeout: timeout
  };
  get.concat(opts, function (err, res, data) {
    if (err) {
      result.error = err;
      result.success = false;
      return hasCallback ? callbackMethod(result) : result;
    }
    var dataString = String.fromCharCode.apply(null, data);
    const pwnedCount = dataString
      .split('\n')
      .map((line) => line.split(':'))
      .filter((filtered) => filtered[0].toLowerCase() === hashedPasswordSuffix)
      .map((mapped) => Number(mapped[1]))
      .shift() || 0;
    result.count = pwnedCount;
    result.pwned = pwnedCount > 0;
    return hasCallback ? callbackMethod(result) : result;
  });
}

function hash(password) {
  const shaSum = crypto.createHash('sha1');
  shaSum.update(password);
  return shaSum.digest('hex');
}
module.exports = isPasswordPwned;