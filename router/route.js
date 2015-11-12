// Routes

Router.route('/', {
    template: 'login'
});

Router.route('/login');
Router.route('/changePassword');
//Router.route('/admin_overall');
Router.route('/updateStudentInfo');
Router.route('/admin_student');
Router.route('/addStudent');
//Router.route('/student');
Router.route('/statistics');
Router.route('/help');
Router.route('/infoPage');


Router.route('/student', function () {
    this.render('student');
});

Router.route('/admin_overall', function () {
    this.render('admin_overall');
})