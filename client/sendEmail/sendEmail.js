Template.sendEmail.events({
    'click .btn-success' : function(event){
        event.preventDefault();
        console.log("click");
        var address = addressInput.value;
        var subject = subjectInput.value;
        var message = messageInput.value;
        console.log("address: " + address + "\tsubject: " + subject + "\tmessage: " + message);
        Meteor.call('sendEmail', address, subject, message);
    }
});