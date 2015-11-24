if (Meteor.isClient) {
 Meteor.subscribe("studentInfo");
    Template.login.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = inputEmail.value;
            var passwordVar = inputPassword.value;
			//uses emailVar to find student in userInfo collection
			var userInfo = studentInfo.findOne({Email: inputEmail.value});
			//sets user that is logging in to user
			var user = userInfo._id;
			//creates an item in session storage equal to the current user
			sessionStorage.setItem('user', JSON.stringify(user));
			
			
            console.log("login submitted.");
            Meteor.loginWithPassword(emailVar, passwordVar);
            console.log("User Id: " + Meteor.userId());

            if (Meteor.userId() != null) {
                Router.go('/student')
            }
        }}
    )}