Meteor.publish("login", function () {
    return Users.find({});
});