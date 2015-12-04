
    Meteor.subscribe("studentInfo");
	Meteor.subscribe("forms");

    Template.adminOverall.helpers({
        studentInfo: function () {
            return studentInfo.find({});
        },
        forms: function () {
            return forms.find({});
        },
        // This works but should probably executed on server
        formPercent: function (name) {

            var numCompleted = FormStatus.find({$and: [{'FormName': name},{Done: true}]}).count();
            var total = studentInfo.find().count();
            var percentage = numCompleted / total;
            return percentage * 100;
        }
    });

    Template.adminOverall.events({
     'click .btn' : function(event){
     event.preventDefault();
     }
     });
