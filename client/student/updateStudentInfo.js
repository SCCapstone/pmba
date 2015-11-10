Users = new Mongo.Collection('studentInfo');
//login = new Mongo.Collection('login');

 if (Meteor.isServer) {
  Meteor.publish("login", "studentInfo", function () {
    return Users.find({});
  });
}
if (Meteor.isClient) {
  //Meteor.subscribe("login");
  Meteor.subscribe("studentInfo");
	Template.updateStudentInfo.events({
		'submit form' : function(event){
			//var userid = window.location.hash.substring(1);//selects current user email from url
			//var user1 = login.findOne({UserID: userid});
			//var user2 = studentInfo.findOne({UserID: userid});
			//var id1 = user1._id; 
			//var id2 = user2._id;
			//Users.update({_id: id2},{$set:{
				//the code above needs to be fixed, but the insert command will not update, only creates a new entry
			Users.insert({
				UserID : inputEmail.value,
				FirstName : firstName.value,
				LastName : lastName.value,
				Email : inputEmail.value,
				CellNumber : cellNumber.value,
				WorkNumber : workNumber.value,
				HomeNumber : homeNumber.value,
			Picture : "Upic1"});
			//login.update({_id: id1}, {$set:{UserID: inputEmail.value}});
				alert("Your information has been updated!");
		}
	});
}
