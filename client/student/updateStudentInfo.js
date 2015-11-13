if (Meteor.isServer) {
	Meteor.publish("login", "studentInfo", function () {
		return studentInfo.find({});
	});
}
if (Meteor.isClient) {
	//Meteor.subscribe("login");
	Meteor.subscribe("studentInfo");
	Template.updateStudentInfo.events({
		'submit form' : function(event){
			event.preventDefault();
			var id = window.location.hash.substring(1);//selects current user from url
			studentInfo.update({_id: id},{$set:{
				FirstName : firstName.value,
				LastName : lastName.value,
				CellNumber : cellNumber.value,
				WorkNumber : workNumber.value,
				HomeNumber : homeNumber.value,
				Picture : "Upic1"}});

			alert("Your information has been updated!");
			window.location.href = "/student" + "#" + id;
		}
	});
}
