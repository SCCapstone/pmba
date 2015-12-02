if (Meteor.isClient) {
 Meteor.subscribe("studentInfo");
    Template.login.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = inputEmail.value;
            var passwordVar = inputPassword.value;		
			
            console.log("login submitted.");
            Meteor.loginWithPassword(emailVar, passwordVar);

            if (Meteor.userId() != null) {
                if (studentInfo.findOne(Meteor.userId())) {
                    console.log('student');
                    Router.go('/student');
                }
                else if (adminInfo.findOne(Meteor.userId())) {
                    console.log('admin');
                    Router.go('/admin_overall');
                }
            }
        }}
    )}