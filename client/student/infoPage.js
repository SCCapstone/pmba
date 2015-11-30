    Meteor.subscribe("forms");
    Template.infoPage.helpers({
        forms: function () {
            return forms.find({_id : Session.get('selectedForm')});
        },
        selectedForm : function () {
            return Session.get("selectedForm")
        }
    });