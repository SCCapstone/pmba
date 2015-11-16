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

// This function checks to make sure the userid is in the url, else
// they are not logged in and are redirected to the login page.
var before = {
    loginRequired: function(pause) {
        console.log('ENTER BEFORE ACTION');
        if  (window.location.hash.substring(1) === '') {
            console.log('User: ' + window.location.hash.substring(1));
            console.log('TRUE!!!!!!!!!!!!!!');
            //this.render('login');
            Router.go('/login');
        }
        console.log('NEXT!!!!!!!!!!!!!!');
        this.next();
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
/*Router.onBeforeAction(before.loginRequired, {
    except: ['login']
});*/ //DISABLED FOR NOW

Router.route('student', function () {
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

Router.route('/updateStudent', function () {
    this.render('updateStudent')
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

Router.route('/addforms', function () {
    this.render('addforms')
});

