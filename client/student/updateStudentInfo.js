
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
			//This gets the id from the userInfo collection from sessionStorage
			var id = JSON.parse(sessionStorage.user)
			studentInfo.update({_id: id},{$set:{
				FirstName : firstName.value,
				LastName : lastName.value,
				CellNumber : cellNumber.value,
				WorkNumber : workNumber.value,
				HomeNumber : homeNumber.value,
				Picture : "Upic1"}});

			alert("Your information has been updated!");
			window.location.href = "/student";
		}
	});
}
