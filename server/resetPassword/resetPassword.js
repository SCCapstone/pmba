Meteor.publish("studentInfo", function () {
    return studentInfo.find();
});

Meteor.methods({
    resetPass:function(email) {
        var user = Meteor.users.findOne({'emails.address': email})._id;
        Accounts.sendResetPasswordEmail(user, email);
    }
});
