Meteor.publish("adminInfo", function () {
    return adminInfo.find({});
});

