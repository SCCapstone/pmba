
 if (Meteor.isServer) {
  Meteor.publish("login", function () {
    return Users.find({});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("login");
  
	Template.login.events({
		'submit form' : function(event){
			event.preventDefault();
			var user = login.findOne({UserID: inputEmail.value});
			
			if(user.UserID == inputEmail.value && user.Password == inputPassword.value && user.TempPassword=="Y"){
				console.log("You are using a temp password, must reset");
				window.location.href = "/changePassword" + "#" + inputEmail.value;
			}
			else if(user.UserID == inputEmail.value && user.Password == inputPassword.value){
				if(user.IDType=="S"){
					window.location.href = "/student" + "#" + inputEmail.value;
				}
				else{
					window.location.href = "/admin_overall";
				}
			}
			else{
				alert("Email or Password are incorrect");
			}
		}
	});
}