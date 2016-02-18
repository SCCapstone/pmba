Meteor.publish("studentInfo", function () {
    return studentInfo.find();
});

// Sends reset password email to user if
// the email address they provide is valid
Meteor.methods({
    resetPass:function(email) {
        if (Meteor.users.findOne({'emails.address': email})) {
            var user = Meteor.users.findOne({'emails.address': email})._id;
            Accounts.sendResetPasswordEmail(user, email);
        }
    }
});
