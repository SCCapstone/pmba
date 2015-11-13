forms = new Mongo.Collection("forms");

if (Meteor.isServer) {
    Meteor.publish("studentInfo", "forms", function () {
        return Users.find({});
    });

}
if (Meteor.isClient) {
    Meteor.subscribe("studentInfo");
    Meteor.subscribe("forms");
    Template.student.helpers({
        studentInfo: function () {
            return forms.find({});

        }

    });
    Template.student.events({
		/*'click .toggle-checked' : function(event){
			var fromNum = "form";

			studentInfo.update(this._id, {
				$set: {Done: ! this.Done}
			});
            var completed = event.target.checked;
            document.getElementById('Name').style = ".muted";
            //var t = document.getElementsByClassName('toggle-checked').textContent;
            //alert(t);
            if(completed === true) {
                //alert(studentInfo.find({Form1: "False"}).count());
                studentInfo.update({UserID: "ID3"}, {$set: {Form1: "true"}});
                //alert(studentInfo.find({UserID: "ID3"}).count());
            }

		},*/
		'click .btn' : function(event){
			event.preventDefault();

			var text = document.getElementById('hide').textContent;
			if (text === "Hide"){
				document.getElementById('hide').textContent = "Show";
			}
			else {
				document.getElementById('hide').textContent = "Hide";
			}
		}
	});

}
function updateInfoPage() {
    var id = window.location.hash.substring(1);
    var user = studentInfo.find({_id: id})

    window.location.href = "/updateInfo"+ "#" + id;
}