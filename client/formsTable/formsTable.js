Meteor.subscribe("forms");
Template.formsTable.helpers({
    formsList: function () {
        return forms;
    }
});