/* To use with Chimp run this command from terminal in the root directory of app
 chimp --ddp=http://localhost:3000 --watch --mocha --path=tests

 */

// This File contains the unit tests for the client side
/*var assert = require('assert');
var should = require('chai').should();
var sinon = require('sinon');
var chai = require('chai');
*/
/*
//Meteor Stubs
Meteor = sinon.stub({
    startup: function() {},
    user: function() {},
    userId: function() {},
    publish: function() {},
    methods: function() {},
    subscribe: function() {}

});*/

//addStudent = require('../../../client/addStudent/addStudent.js');

// Tests
describe('Page setTitle', function () {
    it('should be set to PMBA @watch', function () {
        browser.url('localhost:3000/login');
        expect(browser.getTitle()).to.equal('PMBA');
    });
});

describe('Student Login', function () {
    it('should login student @watch', function () {
        browser.setValue('#inputEmail', 'ACarrico@email.com');
        browser.setValue('#inputPassword', 'password');
        browser.click('#submit');
        browser.pause(5000);
        expect(browser.getUrl()).to.equal('http://localhost:3000/student');

        //browser.url('localhost:3000/admin_overall');
        var test = browser.getUrl();
        //console.log(test);
    });
});

describe('This is a test test?', function() {
    it('Should test a collection or something? @watch', function() {
        /*var studentAccount = server.call(addStudent.createStudent({
            username: 'test@student.com',
            password: 'password'
        }));*/
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
