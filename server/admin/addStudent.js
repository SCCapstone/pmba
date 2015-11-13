 if (Meteor.isServer) {
  Meteor.publish("login", function () {
    return Users.find({});
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
		}
	});
}