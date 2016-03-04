//if (Meteor.isServer) {
Meteor.publish("login", "adminInfo", function () {
    return adminInfo.find({});
});
//}

