Meteor.startup(function () {
    //Setup the email environment variable
    // Right now its using the pmba gmail account
    process.env.MAIL_URL="smtp://pmba.sc.capstone%40gmail.com:pmbaPMBA@smtp.gmail.com:465/";
});

Meteor.methods({
    // This method sends one email
    sendEmail : function (address, subject , message) {
        console.log("Sending Email");
        Email.send({
         to: address,
         from: "pmba.sc.capstone@gmail.com",
         subject: subject,
         text: message
         });
    }
});