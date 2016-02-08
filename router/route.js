/******************************************************************************
 * Router Configuration
 */
Router.configure({
    //TODO Make templates for notFound and loading
    //loadingTemplate: "loading",
   // notFoundTemplate: "notFound"
});

/******************************************************************************
 * Hooks
 */

// This function checks to make sure that a user is logged on
// if not then go to login
var before = {
    loginRequired: function() {
        if (!Meteor.userId()) {
            // if the user is not logged in, render the Login template
            this.render('login');
        } else {
            // otherwise don't hold up the rest of hooks or our route/action function
            // from running
            this.next();
        }
    },

    checkAdmin: function() {
        if (Meteor.userId &&
            adminInfo.findOne(Meteor.userId())) {
            this.next();
        }
        else {
            console.log('You do not have permission');
        }
    }
};
/******************************************************************************
 * Routes
 */

Router.route('/', {
    template: 'login'
});

Router.route('/login');

// Check to make sure user user is logged in
Router.onBeforeAction(before.loginRequired, {
    except: ['login', 'resetPassword']
});
Router.onBeforeAction(before.checkAdmin, {
    only: ['admin_overall', 'admin_student', 'addForms', 'addStudent', '']
});

Router.route('/student', function () {
    this.render('student')
});

Router.route('/admin_student', function () {
    this.render('admin_student');
});

Router.route('/admin_overall', function () {
    this.render('admin_overall');
});

Router.route('/changePassword', function () {
    this.render('changePassword')
});

Router.route('/updateStudentInfo', function () {
    this.render('updateStudentInfo')
});

Router.route('/addStudent', function () {
    this.render('addStudent')
});

Router.route('/statistics', function () {
    this.render('statistics')
});

Router.route('/help', function () {
    this.render('help')
});

Router.route('/infoPage', function () {
    this.render('infoPage')
});

Router.route('/welcomePage', function () {
    this.render('welcomePage')
});

Router.route('/addForms', function () {
    this.render('addForms')
});

Router.route('/notifications', function () {
    this.render('notifications')
});

Router.route('/formsTable', function () {
    this.render('formsTable')
});
	
Router.route('/updateAdminInfo', function () {
    this.render('updateAdminInfo')
});

Router.route('/resetPassword', function () {
    this.render('resetPassword')
});

Router.route('/home', function () {
    if (Meteor.userId() != null &&
        studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'S') {
        Router.go('/student');
    }
    else if (Meteor.userId() != null &&
        adminInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'A') {
        Router.go('/admin_overall');
    }
});

