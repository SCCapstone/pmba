Meteor.publish("login", "studentInfo", function () {
    return studentInfo.find({});
});
