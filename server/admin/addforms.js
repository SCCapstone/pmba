/**
 * Created by userpc on 11/24/2015.
 */
    Meteor.publish("forms", function () {
        return forms.find({});
    });

