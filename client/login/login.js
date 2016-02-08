Meteor.subscribe('studentInfo');
    Template.login.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = inputEmail.value;
            var passwordVar = inputPassword.value;

            console.log("login submitted.");
            Meteor.loginWithPassword(emailVar, passwordVar, function(err){
                if (err) {
                    // login failed
                }
                else {
                    // login succeeded
                    if (Meteor.userId() != null) {
                        if (studentInfo.findOne(Meteor.userId())) {
                            Router.go('/student');
                        }
                        else if (adminInfo.findOne(Meteor.userId())) {
                            Router.go('/admin_overall');
                        }
                    }
                }
            });
        }
    });