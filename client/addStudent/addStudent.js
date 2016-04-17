/*
 Purpose: provides the backbone for the admin to
 add a new account, either admin or student,
 into the system

 */
  Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
  Meteor.subscribe("formTableInfo");
  
	Template.addStudent.events({
		'submit form' : function(event){
			event.preventDefault();

			//the values for each the new account field is established
			var FirstName = firstName.value;
			var LastName = lastName.value;
			var emailVar = inputEmail.value;
			var Date = date.value;

			//currently password is hardcoded for testing purposes
			var passwordVar = 'password';
			var accountType = document.getElementById("Account").value;
			console.log(accountType);
			if(accountType == 'S' || accountType == 'A')
			{
				//meteor creates a new account
				Meteor.call('createStudent', emailVar, passwordVar, accountType, FirstName, LastName, Date );

				//the success message that appears when a student has been added into the system

				swal({
					title: "Success",
					text: "The student has been added.",
					type: "success",
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Okay",
					closeOnConfirm: true},

				function(isConfirm)
				{
					if (isConfirm)
					{
						Router.go('/admin_Overall');
					}
				});
			}
			else
			{
				swal({
					title: "Choose Account Type",
					text: "You must choose to add a 'Student' account or an 'Admin' account",
					type: "warning",
					showCancelButton: false,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "Retry",
					closeOnConfirm: true
				},
				function(isConfirm)
				{
					if (isConfirm)
					{
						Router.go('/addStudent');
					}
				});
			}
	}});



