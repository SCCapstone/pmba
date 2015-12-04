Meteor.publish("forms", function () {
    return forms.find({});
});
Meteor.publish("studentInfo", function () {
    return studentInfo.find({});
});