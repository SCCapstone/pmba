
  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();
			var FirstName = firstName.value;
			var LastName = lastName.value;
			var emailVar = inputEmail.value;
			var Date = date.value;
			var passwordVar = 'password'; //Just for testing
			var accountType = document.getElementById("Account").value;
			Meteor.call('createStudent', emailVar, passwordVar, accountType, FirstName, LastName, Date );

			window.location.href = "/addStudent";
		}
	});



