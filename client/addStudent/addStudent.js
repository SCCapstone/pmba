
  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();
			var emailVar = inputEmail.value;
			var passwordVar = 'password'; //Just for testing
			Meteor.call('createStudent', emailVar, passwordVar );
			
			window.location.href = "/addStudent";
		}
	});



