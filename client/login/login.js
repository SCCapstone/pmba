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

            // For testing
            /***************************************/
            console.log("User Id: " + Meteor.userId());
            console.log('IDType ' + studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType);
            /***************************************/

            if (Meteor.userId() != null &&
                studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'S') {
                Router.go('/student');
            }
            else if (Meteor.userId() != null &&
                studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'A') {
                Router.go('/admin_overall');
            }
        }}
    )}