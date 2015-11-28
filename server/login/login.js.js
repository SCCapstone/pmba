if (Meteor.isServer) {
	Meteor.publish("login","studentInfo", function () {
		return Users.find({});
	});
}