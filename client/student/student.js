if (Meteor.isServer) {
	Meteor.publish("forms", function () {
		var c = forms.find().count();
		alert(c);
		return forms.find({});
	});

}
if (Meteor.isClient) {
	Meteor.subscribe("forms");
	Template.student.helpers({
		forms: function () {
			var c =forms.find({}).count();
			alert(c);
			return forms.find({});

		}
	});
	Template.student.events({
		'click .toggle-checked' : function(event){
			event.preventDefault();

		}
	})
}