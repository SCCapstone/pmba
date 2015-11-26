/**
 * Created by userpc on 11/5/2015.
 */
 Meteor.subscribe("studentInfo");
 Template.statistics.helpers({
        studentInfo: function () {
           return forms.find({});
        }

    });
	//used for testing various statistics methods/values
Template.statistics.events({
		'click .btn' : function(event){
			event.preventDefault();
			Meteor.call('getStats');
			}

	});