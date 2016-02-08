Meteor.methods({
    // This method sends one email
    sendEmail : function (address, subject , message) {
        console.log("Sending Email to " + address);
        Email.send({
         to: address,
         from: "pmba.sc.capstone@gmail.com",
         subject: subject,
         text: message
         });
    }
});
