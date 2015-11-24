/*if (Meteor.isServer) {
	Meteor.publish("login","studentInfo", function () {
		return Users.find({});
	});
}*/


 Meteor.subscribe("studentInfo");
    Template.login.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = inputEmail.value;
            var passwordVar = inputPassword.value;
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
    );