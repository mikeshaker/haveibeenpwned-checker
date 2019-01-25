const request = require('request');
const crypto = require('crypto');

const PREFIX_LENGTH = 5;
const API_URL = 'https://api.pwnedpasswords.com/range/';

function isPasswordPwned(password, cb, timeout = 3000) {
  const hasCallback = typeof cb === 'function';

  if (typeof password !== 'string') {
    const err = new Error('Input password must be a string.');
    return hasCallback ? cb(err) : Promise.reject(err);
  }
  const hashedPassword = hash(password);
  const hashedPasswordPrefix = hashedPassword.substr(0, PREFIX_LENGTH);
  const hashedPasswordSuffix = hashedPassword.substr(PREFIX_LENGTH);

  var result = {
    error: "",
    failed: false,
    count: 0,
    pwned: false
  };
  request(API_URL + hashedPasswordPrefix, { timeout: timeout }, (err, res, body) => {
    if (err) {
      result.error = err;
      result.failed = true;

      return cb(result);
    }
    const pwnedCount = body
      .split('\n')
      .map((line) => line.split(':'))
      .filter((filtered) => filtered[0].toLowerCase() === hashedPasswordSuffix)
      .map((mapped) => Number(mapped[1]))
      .shift() || 0;
    result.count = pwnedCount;
    result.pwned = pwnedCount > 0;
    return cb(result);
  });
}

function hash(password) {
  const shaSum = crypto.createHash('sha1');
  shaSum.update(password);
  return shaSum.digest('hex');
}
module.exports = isPasswordPwned;