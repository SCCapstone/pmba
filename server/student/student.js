Meteor.publish('studentInfo', function () {
    return studentInfo.find();
});

Meteor.publish('forms', function () {
    return forms.find();
});

Meteor.publish('FormStatus', function () {
    return FormStatus.find();
});

