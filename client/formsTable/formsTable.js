
Meteor.subscribe("formTableInfo");
Template.formsTable.helpers({
   formTableInfo: function () {
       return formTableInfo;
   }
});