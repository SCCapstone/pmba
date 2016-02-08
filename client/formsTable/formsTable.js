Meteor.subscribe("forms");
Template.fTable.helpers({
    tableSettings : function () {
      return {
          fields: [
            { key: 'Name', label: 'Form Name' },
            { key: 'Description', label: 'Description' }
          ]
	}},
	
	formNames : function () {
      return forms.find({}, {sort: {Name: 1}});
    }
});