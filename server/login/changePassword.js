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
			var CurUser = login.findOne(userid);
			console.log(CurUser);
			var NewPassDoc = document.getElementById('newPassword');
			var pass = NewPassDoc.value;
			var ConfirmNewPassDoc = document.getElementById('confirmNewPassword');
			var newPass = ConfirmNewPassDoc.value;
			
			//if(oldPassword.value == user.Password && newPassword !== user.Password && newPassword==confirmNewPassword){
			//	console.log("old password correct, new password is the same, password may be changed now.");
			//}
			
		}
	});
}