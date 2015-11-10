Users = new Mongo.Collection('studentInfo');
 
 if (Meteor.isServer) {
  Meteor.publish("studentInfo", function () {
    return Users.find({});
  });
}
if (Meteor.isClient) {
  Meteor.subscribe("studentInfo");
	Template.updateStudentInfo.events({
		'submit form' : function(event){
			event.preventDefault();
			
			Users.insert({
				UserID : inputEmail.value,
				FirstName : firstName.value,
				LastName : lastName.value,
				Email : inputEmail.value,
				CellNumber : cellNumber.value,
				WorkNumber : workNumber.value,
				HomeNumber : homeNumber.value,
				Picture : "Upic1"});
		}
	});
}
