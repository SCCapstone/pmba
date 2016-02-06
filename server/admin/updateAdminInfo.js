//if (Meteor.isServer) {
Meteor.publish("adminInfo", function () {
    return adminInfo.find({});
});
//}

