// Routes

Router.route('/', {
    template: 'login'
});

Router.route('/login');
//Router.route('/changePassword');
//Router.route('/admin_overall');
//Router.route('/updateStudentInfo');
//Router.route('/admin_student');
//Router.route('/addStudent');
//Router.route('/student');
//Router.route('/statistics');
//Router.route('/help');
//Router.route('/infoPage');
//Router.route('/addforms');

/*Router.onBeforeAction(function () {
    except: ['login'];
    Console.log("ENter onBeforeAction");
    if  (user_id !== null) {
        console.log("FALSE!!!!!!!!!!!!!");
        // if the user is not logged in, render the Login template
        this.redirect('/login');
    } else {
        console.log("TRUE!!!!!!!!!!!!!");
        console.log("USER: "+ user_id);
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
});*/
/*Router.onBeforeAction(function () {
    except: ['login'];
    console.log('id::::!!!:::' + user_id);
    console.log('ENTER BEFORE ACTION');
    if  (user_id !== null) {
        console.log('TRUE!!!!!!!!!!!!!!');
        this.render('login');
    }
    console.log('NEXT!!!!!!!!!!!!!!');
    this.next();
});*/

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

