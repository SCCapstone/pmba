
  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();
			var firstName = firstName.value;
			var lastName = lastName.value;
			var emailVar = inputEmail.value;
			var date = date.value;
			var passwordVar = 'password'; //Just for testing
			var accountType = document.getElementById("Account").value;
			Meteor.call('createStudent', emailVar, passwordVar, accountType );

			window.location.href = "/addStudent";
		}
	});



