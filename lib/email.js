Meteor.startup(function () {
    //Setup the email environment variable
    // Right now its using the pmba gmail account
    // DISABLED FOR TESTING
    //process.env.MAIL_URL="smtp://pmba.sc.capstone%40gmail.com:pmbaPMBA@smtp.gmail.com:465/";

    Accounts.emailTemplates.siteName = "PMBA";
    Accounts.emailTemplates.from = "PMBA ADMIN <pmba.sc.capstone@gmail.com>";


    //Send email when account is created
    Accounts.config({
        sendVerificationEmail: true
    });
});
