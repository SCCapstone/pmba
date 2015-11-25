Meteor.startup(function () {
    console.log('Starting up Email!');
    process.env.MAIL_URL="smtp://pmba.sc.capstone%40gmail.com:pmbaPMBA@smtp.gmail.com:465/";
});

Meteor.methods({
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