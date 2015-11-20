if (Meteor.isServer) {
	Meteor.publish("login","studentInfo", function () {
		return Users.find({});
	});
}

if (Meteor.isClient) {
 Meteor.subscribe("studentInfo");
    Template.login.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = inputEmail.value;
            var passwordVar = inputPassword.value;
            console.log("login submitted.");
            Meteor.loginWithPassword(emailVar, passwordVar);
            console.log("User Id: " + Meteor.userId());
        }}
    )}