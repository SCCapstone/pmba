forms = new Mongo.Collection("forms");

if (Meteor.isClient) {
	Meteor.subscribe("forms", "studentInfo");

	Template.student.helpers({
		forms: function () {
			return forms.find({});

		}
	});
	
	Template.student.events({
		'click .toggle-checked' : function(event){
			event.preventDefault();

		}
	});	
}

function updateInfoPage() {
		var id = window.location.hash.substring(1);
		var user = studentInfo.find({_id: id})
		
		window.location.href = "/updateInfo"+ "#" + id;
}