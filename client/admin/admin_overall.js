
if (Meteor.isClient) {
    Meteor.subscribe("studentInfo");
	Meteor.subscribe("forms");
	
    Template.adminOverall.helpers({
        studentInfo: function () {
            return studentInfo.find({});
        },
        forms: function () {
            return forms.find({});
        }
    });

    Template.adminOverall.events({
     'click .btn' : function(event){
     event.preventDefault();
     }
     });
}