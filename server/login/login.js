/**
 * Created by userpc on 11/24/2015.
 */
    Meteor.publish("studentInfo", function () {
        return studentInfo.find({});
    });
