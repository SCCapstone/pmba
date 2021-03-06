Meteor.subscribe("studentInfo");

Template.sendEmail.events({
    'submit #sendButton' : function(event){
		//prevent defaults keeps the page from refreshing before we want it to
        event.preventDefault();
        var address = addressInput.value;
        var subject = subjectInput.value;
        var message = messageInput.value;
        console.log('SENDING EMAIL');
        Meteor.call('sendEmail', address, subject, message);
        swal("Email Sent!","The email has been successfully sent.","success");


        // Update SentEmails field for student
        studentInfo.update(Session.get('selectedStudent'), {
            $set: {
                SentEmails: this.SentEmails += 1
            }
        });
    }
});

Template.sendEmail.helpers({
    profile: function() {
        return studentInfo.findOne(Session.get('selectedStudent'));
    }
});
