
Meteor.subscribe("formTableInfo");
Template.formsTable.helpers({
   formTableInfo: function () {
       return formTableInfo;
   },
   settings: function() {
    return {
      collection: "formTableInfo",
	  fields: [
		  {key: 'name', label: function () { return new Spacebars.SafeString("<input type='checkbox' />"); }}
	  ]
    };
  }
});