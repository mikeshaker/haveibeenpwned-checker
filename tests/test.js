const assert = require('assert');
const HIBP = require('../');


describe('PasswordChecker', () => {
    it('receives error with a `null` password', (done) => {
        HIBP.PasswordChecker(null, (err) => {
            assert.equal(err, 'Error: Input password must be a string.')
            done()
        })
    });

    it('password is pwned', (done) => {
        HIBP.PasswordChecker("Abcd1234$", (result) => {
            assert.ok(result.pwned)
            assert.ok(result.count > 0)
            done()
        })
    });

    it('password is pwned2, passing timeout', (done) => {
        HIBP.PasswordChecker("Abcd1234$", (result) => {
            assert.ok(result.pwned)
            assert.ok(result.count > 0)
            done()
        }, 5000)
        
    });
});


describe('AccountChecker', () => {
    it('receives error with a `null` account', (done) => {
        HIBP.AccountChecker(null, (err) => {
            assert.equal(err, 'Error: Input account must be a string.')
            done()
        })
    });   
});