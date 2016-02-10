/* The purpose of this file is to setup:
   - email environment variable
   - email templates
   - Accounts, send verification email
  */

Meteor.startup(function () {
    //Setup the email environment variable
    // Right now its using the pmba gmail account
    // DISABLED FOR TESTING
    //process.env.MAIL_URL="smtp://pmba.sc.capstone%40gmail.com:pmbaPMBA@smtp.gmail.com:465/";
    //console.log('setting the email variable');
    Accounts.emailTemplates.siteName = "PMBA";
    Accounts.emailTemplates.from = "PMBA ADMIN <pmba.sc.capstone@gmail.com>";


    //Send email when account is created
    Accounts.config({
        sendVerificationEmail: true
    });
});
