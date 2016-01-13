Meteor.startup(function () {

    Accounts.emailTemplates.enrollAccount.subject = function (user) {
        var first = studentInfo.findOne(user._id)['FirstName'];
        var last = studentInfo.findOne(user._id)['LastName'];
        return "Welcome to the PMBA Application " + first + " " + last;
    };
    Accounts.emailTemplates.enrollAccount.text = function (user, url) {
        return "You have been selected to participate in the PMBA application"
            + " To activate your account, simply click the link below:\n\n"
            + url;
    };
});