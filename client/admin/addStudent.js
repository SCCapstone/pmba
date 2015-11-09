login = new Mongo.Collection('login');
 
 if (Meteor.isServer) {
  Meteor.publish("login", function () {
	  var lastAdded = Users.find({login: userID}, {sort: {$natural : 1}, limit: N });
		
  });
}
if (Meteor.isClient) {
  Meteor.subscribe("login");
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();
			login.insert({
				UserID : inputEmail.value,
				IDType : "S",
				Password : inputEmail.value,
				TempPassword : "Y"});		
				location.reload();
				alert(inputEmail.value + " added.")
		}
	});
}