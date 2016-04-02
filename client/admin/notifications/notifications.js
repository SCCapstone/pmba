
Meteor.subscribe("studentInfo");
Meteor.subscribe("forms");

Template.adminOverall.helpers({
  /*  studentInfo: function () {
        return studentInfo.find({});
    },*/
    forms: function () {
        return forms.find({});
    }
});

Template.notifications.events({
    'click .btn-success' : function(event){
        //prevent defaults keeps the page from refreshing before we want it to
        event.preventDefault();
        var subject = subjectInput.value;
        var message = messageInput.value;
        var cursor = studentInfo.find();
        cursor.forEach(function (student) {
            var address = student.Email;
            Meteor.call('sendEmail', address, subject, message);

            // Update SentEmails field for student
            studentInfo.update(student.id, {
                $set: {
                    SentEmails: this.SentEmails += 1
                }
            });
        });
    }
});
