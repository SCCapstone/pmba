/**
 * Created by userpc on 11/5/2015.
 */
Template.statistics.helpers({
	studentInfo: function () {
		return forms.find({});
	}

});
//used for testing various statistics methods/values
Template.statistics.events({
	'click .btn' : function(event){
		event.preventDefault();
		var numForms = forms.find({}).count();
		for(i = 1; i <= numForms; i++){
			Meteor.call('getNumStudentsFormXCompleted', i);
		}
	}

});