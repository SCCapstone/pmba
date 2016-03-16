
  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
  Meteor.subscribe("formTableInfo");
  
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

  			sAlert.success('The student has been added!',
	  		{
		  		onClose: function () {
			  		Router.go('/admin_Overall');
		  		},
		  		timeout: 1500,
		  		offset: '40px',
		  		position: 'bottom'
	  		});

  		}
  });



