Meteor.subscribe("studentInfo");

Template.sendEmail.events({
    'click .btn-success' : function(event){
        event.preventDefault();
        var address = addressInput.value;
        var subject = subjectInput.value;
        var message = messageInput.value;
        Meteor.call('sendEmail', address, subject, message);
    }
});

Template.sendEmail.helpers({
    profile: function() {
        return studentInfo.findOne(Session.get('selectedStudent'));
    }
});