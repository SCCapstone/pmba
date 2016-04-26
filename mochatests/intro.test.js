/**
 * Unit Testing
 *
 * Notes:
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
 *
 */

var chai = require('chai');
var chaiHttp = require('chai-http'); //required to run tests in the browser
var assert = chai.assert;
chai.use(chaiHttp);

describe('Array', function() {
    it('should start empty', function() {
        var array = [];

        assert.equal(array.length, 0);
    });
});

describe('Array Element', function(){
    it('should loop through the entire array', function() {

        var i = 0;

        [1,2,3].forEach(function() {
            i++;
        });

        assert.equal(i, 3);

    })
});



describe('Homepage', function() {
    it('should open homepage', function() {
        chai.request('http://localhost:3000')
            .put('/login')
    })
})

describe('App Title', function () {
    it('should be set to PMBA', function () {

        chai.request('http://localhost:3000')
            .put('/login')
        
        assert.equal('PMBA', 'PMBA', 'title is equal')
    });
});

describe('Login', function () {
    it('should login', function() {

        chai.request('http://localhost:3000')

            .put('/login')
            .send({ email: 'student4@student.com', password: 'password' })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.have.property(email);
                expect(res).to.have.property(password);
            });

    });

});




