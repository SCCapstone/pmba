
    Meteor.subscribe("forms");
    Meteor.subscribe("studentInfo");
    Template.adminStudent.helpers({
        forms: function () {
            return forms.find({});

        },
        studentInfo: function() {
            var temp = "ID";
            temp = temp +2;
            return studentInfo.find({UserID: temp});
        }
    });

