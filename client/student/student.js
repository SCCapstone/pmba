Forms = new Mongo.Collection("forms");

if (Meteor.isServer) {
  Meteor.publish("forms", function () {
    return Forms.find({});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("forms");
  
    Template.student.helpers({
		forms: function () {
		  if (Session.get("hideCompleted")) {
            return forms.find({Done: {$ne: "Y"}});
          } 
		  else {
            return forms.find({});
          }
		},
        hideCompleted: function () {
          return Session.get("hideCompleted");
	    },
        "change .hide-completed input": function (event) {
        Session.set("hideCompleted", event.target.checked);
	}
	});
	
	Template.student.events({
		'submit form' : function(event){
			event.preventDefault();
		},
		"click .toggle-checked": function () {
		}
	});
	
}