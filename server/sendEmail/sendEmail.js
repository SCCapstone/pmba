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
    },
    sendMassEmail : function (addresses, subject , message) {
        for (i = 0; i < addresses.length; ++i) {
            console.log("Sending Email to " + addresses[i]);
            Email.send({
                to: addresses[i],
                from: "pmba.sc.capstone@gmail.com",
                subject: subject,
                text: message
            });
        }
    }
});
