if (Meteor.isServer) {
    Meteor.publish("studentInfo", function () {
        return studentInfo.find({});
    });

}
if (Meteor.isClient) {
    Meteor.subscribe("studentInfo");
    Template.adminOverall.helpers({
        studentInfo: function () {
            //var c =Forms.find({}).count();
            //alert(c);
            return studentInfo.find({});

        }
    });

}