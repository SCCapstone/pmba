/**
 * Before testing, have mocha and chai installed with
 * the following commands:
 *         meteor add practicalmeteor:mocha
 *         npm install chai
 * The chai library is in the node-modules directory.
 *
 * In order to conduct unit testing, go to the root directory
 * of the app and type in the following command:
 *         meteor test --driver-package practicalmeteor:mocha
 *
 * This will run the app in a test mode and acknowledge only
 * the files that have the following format:
 *         *.test.js
 * Currently, I have the unit test files in a directory
 * called "mochatests."
 *
 * In the browser, a client test and a browser test side of
 * the window will appear.  The browser will indicate
 * the passes, the failures, the duration of the tests,
 * and a check mark next to the description of the tests
 * if they have succeeded.
 */

var chai = require('chai');
var assert = chai.assert;

describe('Array', function() {
    it('should start empty', function() {
        var array = [];

        assert.equal(array.length, 0);
    });
});


describe('Page setTitle', function () {
    it('should be set to PMBA @watch', function () {
        browser.url('localhost:3000/login');
        expect(browser.getTitle()).to.equal('PMBA');
    });
});