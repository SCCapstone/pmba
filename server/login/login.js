/**
 * Created by userpc on 11/24/2015.
 */
    Meteor.publish("login","studentInfo", function () {
        return Users.find({});
    });
