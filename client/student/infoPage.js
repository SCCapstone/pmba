Meteor.subscribe("forms");
Meteor.subscribe("studentInfo");
Meteor.subscribe("adminInfo");
Template.infoPage.helpers({
    forms: function () {
        return forms.find({});
    },
    profile: function() {
        return forms.find(Session.get('selectedForm')).fetch();
    },
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
    studnets: function () {
        return studentInfo.find({});
    },
});