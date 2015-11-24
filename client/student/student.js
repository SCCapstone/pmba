
    Meteor.subscribe("studentInfo");
    Meteor.subscribe("forms");
    Template.student.helpers({
        studentInfo: function () {
            return forms.find({});

        }

    });
    Template.student.events({
		'click .btn' : function(event){
			event.preventDefault();

			var text = document.getElementById('hide').textContent;
			if (text === "Hide"){
				//document.getElementById('hide').textContent = "Show";
			}
			else {
				//document.getElementById('hide').textContent = "Hide";
			}
		}
	});
