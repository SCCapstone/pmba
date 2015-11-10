 if (Meteor.isServer) {
  Meteor.publish("login", function () {
    return Users.find({});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("login");
  
	Template.changePassword.events({
		'submit form' : function(event){
			event.preventDefault();
			var userid = window.location.hash.substring(1);//selects current user email from url
			var user = login.findOne({UserID: userid});
			var id = user._id;
			
			if(oldPassword.value == user.Password && newPassword.value !== user.Password && confirmNewPassword.value==newPassword.value){
				login.update({_id: id},{$set:{Password: newPassword.value, TempPassword: "N"}});
				if(user.IDType=="S"){
					window.location.href = "/student"+ "#" + inputEmail.value;
				}
			}
			
		}
	});
}