
if (Meteor.isServer) {
	 // WHAT DOES THIS DO?
  /*Meteor.publish("login", "studentInfo", function () {
	  var lastAdded = Users.find({login: userID}, {sort: {$natural : 1}, limit: N });
	  return studentInfo.find({});
  });*/

}

  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();
			var emailVar = inputEmail.value;
			var passwordVar = 'password'; //Just for testing
			Meteor.call('createStudent', emailVar, passwordVar );
		}
	});



