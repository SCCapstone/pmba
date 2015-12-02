Meteor.subscribe("forms");
Template.infoPage.helpers({
    forms: function () {
        return forms.find({});
    },
    studentInfo: function() {
        var temp = "ID";
        temp = temp +2;
        return studentInfo.find({UserID: temp});
    },
    profile: function() {
        return forms.find(Session.get('selectedForm')).fetch();
    }
});