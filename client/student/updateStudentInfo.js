
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
			studentInfo.update({_id: Meteor.userId()},{$set:{
				FirstName : firstName.value,
				LastName : lastName.value,
				CellNumber : cellNumber.value,
				WorkNumber : workNumber.value,
				HomeNumber : homeNumber.value,
				Picture : "Upic1"}});

				sAlert.success('Your Information Has Been Updated',
					{
						onClose: function() {
		                    Router.go('/student');
		                },
						timeout: 1500,
						offset: '40px',
						position: 'bottom'
					});
		}
	});
}
