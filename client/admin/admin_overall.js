
    Meteor.subscribe("studentInfo");
	Meteor.subscribe("forms");

    var test = 100;

    Template.adminOverall.helpers({
        studentInfo: function () {
            return studentInfo.find({});
        },
        forms: function () {
            return forms.find({});
        },
        percent: function (name) {
            Meteor.call('formPercent', name, function(error, result) {
                if (error) {
                    console.log(error.reason);
                    return;
                }
                console.log('returning num: ' + parseInt(result));
                return parseInt(result);
            });
        },
        test: function() {
            var num = 100;
            return num;
        }
    });

    Template.adminOverall.events({
     'click .btn' : function(event){
     event.preventDefault();
     }
     });
