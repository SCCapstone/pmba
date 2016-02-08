//if (Meteor.isServer) {
    Meteor.publish("studentInfo", function () {
        return studentInfo.find({});
    });
//}

