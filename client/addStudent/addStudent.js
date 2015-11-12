login = new Mongo.Collection('login');
studentInfo = new Mongo.Collection('studentInfo'); 

 if (Meteor.isServer) {
  Meteor.publish("login", "studentInfo", function () {
	  var lastAdded = Users.find({login: userID}, {sort: {$natural : 1}, limit: N });
	  return studentInfo.find({});
  });
  
}
if (Meteor.isClient) {
  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();
			login.insert({
				UserID : inputEmail.value,
				IDType : "S",
				Password : inputEmail.value,
				TempPassword : "Y"});
			
			studentInfo.insert({
				UserID: inputEmail.value,
				Email: inputEmail.value,
				Form1: "N",
				Form2: "N",
				Form3: "N"});
				location.reload();
				alert(inputEmail.value + " added.")
		}
	});
}