
  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();
			var emailVar = inputEmail.value;
			var passwordVar = 'password'; //Just for testing fix later
			var accountType = document.getElementById("Account").value;
			Meteor.call('createStudent', emailVar, passwordVar, accountType );

			window.location.href = "/addStudent";
		}
	});



