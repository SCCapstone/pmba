
    Meteor.subscribe("studentInfo");
	Meteor.subscribe("forms");

    Template.adminOverall.helpers({
        studentInfo: function () {
            return studentInfo.find({});
        },
        forms: function () {
            return forms.find({});
        },
        // I'm not sure why this won't work
        percent: function (name) {
            Meteor.call('formPercent', name, function(error, result) {
                if (error) {
                    console.log(error.reason);
                    return;
                }
                var num = parseInt(result);
                return num;
            });
        },
        // This works but should probably executed on server
        formPercent: function (name) {
            var $qry = {};
            $qry['Forms.' +name] = true;
            var numCompleted = studentInfo.find($qry).count();
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
