  Meteor.subscribe("login");
  
	Template.changePassword.events({
		'submit form' : function(event){
			event.preventDefault();
			var id = window.location.hash.substring(1);//selects current user email from url
			var user = login.findOne({_id: id});//look in login collection for id
			var userEmail = user.UserID;//select email from login database corresponding with the userid previously
			var student = studentInfo.findOne({UserID: userEmail});//select student from email we got above
			
			if(oldPassword.value == user.Password && newPassword.value !== user.Password && confirmNewPassword.value==newPassword.value){
				login.update({_id: id},{$set:{Password: newPassword.value, TempPassword: "N"}});
				if(user.IDType=="S"){
					window.location.href = "/student"+ "#" + student._id;
				}
			}
			
		}
	});
