Meteor.subscribe("studentInfo");
Meteor.subscribe("adminInfo");

Template.helpPage.events({
    'click .btn-success' : function(event){
        event.preventDefault();
        var student = studentInfo.findOne(Meteor.userId());
        var address = adminInfo.findOne({_id: "contact"}).Email;
        var subject = "PMBA APP - " + subjectInput.value;
        var message = "Name: " + student.FullName + "\n"
            + "Email: " + addressInput.value + "\n"
            + "Phone: " + student.CellNumber +"\n\n"
            + messageInput.value ;
        Meteor.call('sendEmail', address, subject, message);
    },
    'click .btn-info' : function(event){
        event.preventDefault();
        Router.go('/updateHelpInfo');

    }
});

Template.helpPage.helpers({
    AccountType: function () {
        var student = studentInfo.findOne({_id: Meteor.userId()});
        //var admin = adminInfo.findOne({_id: Meteor.userId()});
        if (student.IDType === 'S') {
            return true;
        }
        else {
            return false;
        }
    },
    profile: function () {
        if(studentInfo.findOne(Meteor.userId())) {
            return studentInfo.find(Meteor.userId());
        }
        if(adminInfo.findOne(Meteor.userId())) {
            return adminInfo.find(Meteor.userId());

        }
    },
    contactInfo: function () {
        return adminInfo.find({_id: "contactInfo"});
    }
});