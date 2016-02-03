Meteor.publish('studentInfo', function () {
		return studentInfo.find({});
});

Meteor.publish('users', function () {
    return users.find({});
});