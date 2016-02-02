/* To use with Chimp run this command from terminal in the root directory of app
 chimp --ddp=http://localhost:3000 --watch --mocha --path=tests

 */

// This File contains the unit tests for the client side
var assert = require('assert');
var should = require('chai').should();
var sinon = require('sinon');

//Meteor Stubs
Meteor = sinon.stub({
    startup: function() {},
    user: function() {},
    userId: function() {},
    publish: function() {},
    methods: function() {}
});

// Tests
describe('Page title', function () {
    it('should be set to PMBA @watch', function () {
        browser.url('localhost:3000/');
        expect(browser.getTitle()).to.equal('PMBA');
    });
});

// This is an example
describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present @watch', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});