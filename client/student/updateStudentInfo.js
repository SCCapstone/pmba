users = new Mongo.Collection('users');

Meteor.methods({
post: function(){
	document.getElementById("updateInfo").submit();

}
});

if(Meteor.isClient){
	Template.updateStudentInfo.events({
		'click .btn' : function(document){
			var doc = {
				"UserID" : inputEmail,
				"FirstName" : firstName,
				"LastName" : lastName,
				"Email" : inputEmail,
				"CellNumber" : cellNumber,
				"WorkNumber" : workNumber,
				"HomeNumber" : homeNumber,
				"Picture" : "Upic1"};
				
			users.insert(doc);
		}
	});
}
