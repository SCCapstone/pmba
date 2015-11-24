//if (Meteor.isServer) {
    Meteor.publish("login", "studentInfo", function () {
        return studentInfo.find({});
    });
//}

