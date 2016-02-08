Meteor.publish("forms", function () {
    return forms.find({});
});
Meteor.publish("studentInfo", function () {
    return studentInfo.find({});
});

Meteor.methods({
    deleteAccount: function(deleteID, deleteEmail, accountType) {
        //if the account is a student it enters teh if statement
        //other wise it will enter the else statement
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