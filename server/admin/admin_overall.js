Meteor.publish("forms", function () {
    return forms.find({});
});
Meteor.publish("studentInfo", function () {
    return studentInfo.find({});
});

Meteor.methods({
    //need to add a check for student or admin account
    //possible that it could be better to find out account type before and send as a variable
    deleteAccount: function(deleteID, deleteEmail, accountType) {
        if (accountType) {
            studentInfo.remove(deleteID);
            FormStatus.remove({Email:deleteEmail});
            Meteor.users.remove({_id: deleteID});
        }
        else {
            adminInfo.remove(deleteID);
            Meteor.users.remove({_id: deleteID});
        }
    }

});