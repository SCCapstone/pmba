Meteor.publish('studentInfo', function () {
		return studentInfo.find({});
});
