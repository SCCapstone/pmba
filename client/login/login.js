if (Meteor.isServer) {
	Meteor.publish("login","studentInfo", function () {

		return Users.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe("login","studentInfo");

	Template.login.events({
		'submit form' : function(event){
			event.preventDefault();
			var user = login.findOne({UserID: inputEmail.value});
			var userInfo = studentInfo.findOne({UserID: inputEmail.value});
            console.log("SUBMIT FORM");
			if(user.UserID == inputEmail.value && user.Password == inputPassword.value && user.TempPassword=="Y"){
				console.log("You are using a temp password, must reset");
				window.location.href = "/changePassword" + "#" + user._id;
			}
			else if(user.UserID == inputEmail.value && user.Password == inputPassword.value){
				if(user.IDType=="S"){

					window.location.href = "/student" + "#" + userInfo._id;
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
