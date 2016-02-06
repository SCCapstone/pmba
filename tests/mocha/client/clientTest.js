/* To use with Chimp run this command from terminal in the root directory of app
 chimp --ddp=http://localhost:3000 --watch --mocha --path=tests

 */

// This File contains the unit tests for the client side
var assert = require('assert');
var should = require('chai').should();
var sinon = require('sinon');
var chai = require('chai');


//Meteor Stubs
Meteor = sinon.stub({
    startup: function() {},
    user: function() {},
    userId: function() {},
    publish: function() {},
    methods: function() {}

});

studentInfo = require('../../../server/addStudent/addStudent.js');

// Tests
describe('Page title', function () {
    it('should be set to PMBA @watch', function () {
        browser.url('localhost:3000/login');
        expect(browser.getTitle()).to.equal('PMBA');
    });
});

describe('Student Login', function () {
    it('should login student @watch', function () {
        browser.setValue('#inputEmail', 'student4@student.com');
        browser.setValue('#inputPassword', 'password');
        browser.click('#submit');
        browser.pause(5000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/student');

        //browser.url('localhost:3000/admin_overall');
        var test = browser.getUrl();
        //console.log(test);
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