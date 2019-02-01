const simpleGet = require('simple-get');
const RateLimiter = require('limiter').RateLimiter;

//https://haveibeenpwned.com/API/v2#RateLimiting
const limiter = new RateLimiter(1, 1500);


const API_URL = 'https://haveibeenpwned.com/api/v2/breachedaccount/';

function AccountChecker(account, callbackMethod, timeout = 3000) {
    const hasCallback = typeof callbackMethod === 'function';
    if (typeof account !== 'string') {
        const err = new Error('Input account must be a string.');
        return hasCallback ? callbackMethod(err) : (err);
    }
    var result = {
        error: "",
        success: true,
        body: []
    };

    const opts = {
        url: API_URL + account,
        timeout: timeout,
        headers: {
            'user-agent': 'haveibeenpwned-checker (https://github.com/mikeshaker/haveibeenpwned-checker)'
        }
    };
    const get = (opts, cb) => limiter.removeTokens(1, () => simpleGet(opts, cb));
    get.concat = (opts, cb) => limiter.removeTokens(1, () => simpleGet.concat(opts, cb));
    get.concat(opts, function (err, res, data) {
        if (err) {
            result.error = err;
            result.success = false;
            return hasCallback ? callbackMethod(result) : result;
        }
        result.body = JSON.parse(data);
        return hasCallback ? callbackMethod(result) : result;
    });

}

module.exports = AccountChecker;
