if (Meteor.isServer) {
    Meteor.publish("forms", "studentInfo", function () {
        return Users.find({});
    });

}
if (Meteor.isClient) {
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

}