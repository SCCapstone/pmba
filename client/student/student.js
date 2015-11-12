if (Meteor.isServer) {
	Meteor.publish("forms", function () {
		return Users.find({});
	});

}
if (Meteor.isClient) {
	Meteor.subscribe("forms");
	Template.student.events({
		/*'click .toggle-checked' : function(event){
			forms.update(this._id, {
				$set: {Done: ! this.Done}
			});

		},*/
		'click .btn' : function(event){
			event.preventDefault();

		}
	});
	Template.student.helpers({
		forms: function () {

			return forms.find({});

		}
	});

}