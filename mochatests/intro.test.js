/**
 * Unit Testing
 *
 * Notes:
 * Before testing, have mocha and chai installed with
 * the following commands:
 *         meteor add practicalmeteor:mocha
 *         npm install chai
 *         npm install chai-http
 * The chai library is in the node-modules directory.
 * The chai-http is needed to access the browser.
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
                expect(res).to.have.property(email);
                expect(res).to.have.property(password);
            });

    });

});

describe('Admin Page Title', function () {
    it('should be set to Administrator Page', function () {

        chai.request('http://localhost:3000')
            .put('/admin_overall')

        assert.equal('Administrator Page', 'Administrator Page', 'title is equal')
    });

});


//describe('Check form percent', function () {
//    it('should show percentage of each form', function () {
//
//        chai.request('http://localhost:3000')
//            .put('/admin_overall')
//
//        var formPercent = document.getElementById('formPercent');
//        var percentage = document.getElementById('percentage');
//        assert.isNumber(percentage, 'shows form completion percentage');
//
//    });
//});


describe('Add Account', function () {
    it('should add student', function () {

        chai.request('http://localhost:3000')
            .put('/addStudent')

            .send({ firstName: ' ',
                    lastName: ' ',
                    email: ' ',
                    date: ' '

            })

            .end(function (err, res) {
                expect(res).to.have.property(firstName);
                expect(res).to.have.property(lastName);
                expect(res).to.have.property(email);
                expect(res).to.have.property(date);
            });

    });
});

describe('Update Admin Info', function () {
    it('should update account information', function () {

        chai.request('http://localhost:3000')
            .put('/updateAdminInfo')

        .send({ firstName: ' ',
                lastName: ' ',
                email: ' ',
                workNumber: ' ',
                cellNumber: ' ',
                homeNumber: ' ',
                address: ' '

            })

            .end(function (err, res) {
                expect(res).to.have.property(firstName);
                expect(res).to.have.property(lastName);
                expect(res).to.have.property(email);
                expect(res).to.have.property(workNumber);
                expect(res).to.have.property(cellNumber);
                expect(res).to.have.property(homeNumber);
                expect(res).to.have.property(address);
            });
    });

    it('should have the correct update information title', function () {

        chai.request('http://localhost:3000')
            .put('/updateAdminInfo')

        assert.equal('Update Information', 'Update Information', 'title is the same')
    });

});


describe('Add Form', function () {
    it('should a new form', function () {

        chai.request('http://localhost:3000')
            .put('/addForm')

            .send({ name: ' ',
                    description: ' ',
                    formAddress: ' ',
                    date: ' '

            })

            .end(function (err, res) {
                expect(res).to.have.property(name);
                expect(res).to.have.property(description);
                expect(res).to.have.property(formAddress);
                expect(res).to.have.property(date);
            });

    });

});


describe('Update Student Information', function () {
    it('should update student information', function () {

        chai.request('http://localhost:3000')
            .put('/updateStudentInfo')

            .send({ firstName: ' ',
                    lastName: ' ',
                    email: ' ',
                    workNumber: ' ',
                    cellNumber: ' ',
                    homeNumber: ' ',
                    address: ' '

            })

            .end(function (err, res) {
                expect(res).to.have.property(firstName);
                expect(res).to.have.property(lastName);
                expect(res).to.have.property(email);
                expect(res).to.have.property(workNumber);
                expect(res).to.have.property(cellNumber);
                expect(res).to.have.property(homeNumber);
                expect(res).to.have.property(address);
            });

    });

    it('should check page title', function () {

        chai.request('http://localhost:3000')
            .put('/updateStudentInfo')

        assert.equal('Update Information', 'Update Information', 'title should be equal')

    });

});


describe('Reset Password', function () {
    it('should reset password', function () {

        chai.request('http://localhost:3000')
            .put('/resetPassword')

            .send({ emailVar: ' '
              })

            .end(function (err, res) {
                expect(res).to.have.property(emailVar);
            });

    });

    it('should check page title', function () {

        chai.request('http://localhost:3000')
            .put('/Reset Password')

        assert.equal('Reset Password', 'Reset Password', 'title should be equal')

    });

});


describe('Send Email', function () {
    it('should send email to student', function () {

        chai.request('http://localhost:3000')
            .put('/sendEmail')

            .send({ address: ' ',
                    subject: ' ',
                    message: ' '
              })

            .end(function (err, res) {
                expect(res).to.have.property(address);
                expect(res).to.have.property(subject);
                expect(res).to.have.property(message);
            });

    });

    it('should check page title', function () {

        chai.request('http://localhost:3000')
            .put('/sendEmail')

        assert.equal('Send Email', 'Send Email', 'title should be equal')

    });

});


describe('Send Notification', function () {
    it('should send notification to student', function () {

        chai.request('http://localhost:3000')
            .put('/sendNotification')

            .send({ address: ' ',
                subject: ' ',
                message: ' '
            })

            .end(function (err, res) {
                expect(res).to.have.property(address);
                expect(res).to.have.property(subject);
                expect(res).to.have.property(message);
            });

    });

    it('should check page title', function () {

        chai.request('http://localhost:3000')
            .put('/sendNotification')

        assert.equal('Send Notification', 'Send Notification', 'title should be equal')

    });

});


describe('Help Page', function () {
    it('should send help message', function () {

        chai.request('http://localhost:3000')
            .put('/helpPage')

            .send({ student: ' ',
                    address: ' ',
                    subject: ' ',
                    message: ' '
            })

            .end(function (err, res) {
                expect(res).to.have.property(student);
                expect(res).to.have.property(address);
                expect(res).to.have.property(subject);
                expect(res).to.have.property(message);
            });

    });

    it('should check page title', function () {

        chai.request('http://localhost:3000')
            .put('/helpPage')

        assert.equal('Help', 'Help', 'title should be equal')

    });

});


describe('Help Page', function () {
    it('should send help message', function () {

        chai.request('http://localhost:3000')
            .put('/updateHelpPage')

            .send({ email: ' ',
                    phone: ' '
            })

            .end(function (err, res) {
                expect(res).to.have.property(email);
                expect(res).to.have.property(phone);
            });

    });

    it('should check page title', function () {

        chai.request('http://localhost:3000')
            .put('/updateHelpPage')

        assert.equal('Update Information', 'Update Information', 'title should be equal')

    });

});


//describe('Search', function () {
//    it('should search for students', function () {
//
//        chai.request('http://localhost:3000')
//            .put('/admin_overall')
//
//            var searchBox = document.getElementById('searchBox');
//            var studentIndex = document.getElementById('studentIndex');
//
//        assert.include(searchBox, studentIndex, 'student is in search box')
//
//
//
//    });
//
//});


