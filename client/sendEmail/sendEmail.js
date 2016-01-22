Meteor.subscribe("studentInfo");

Template.sendEmail.events({
    'click .btn-success' : function(event){
		//prevent defaults keeps the page from refreshing before we want it to
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