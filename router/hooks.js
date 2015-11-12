/*Router.onBeforeAction(function () {
    console.log('test: ' +window.location.hash.substring(1));
    if  (window.location.hash.substring(1) == null) {
        // if the user is not logged in, render the Login template
        this.render('login');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
});
*/