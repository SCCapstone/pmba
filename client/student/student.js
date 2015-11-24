forms = new Mongo.Collection("forms");

if (Meteor.isClient) {
    Meteor.subscribe("studentInfo");
    Meteor.subscribe("forms");
    Template.student.helpers({
        studentInfo: function () {
           return forms.find({});
        }

    });
    Template.student.events({
		'click .toggle-checked' : function(event){
            event.preventDefault();
            var formId = this._id;
            var formNum = forms.findOne({_id: formId});
            var test = formNum.FormNumber;
            var checkValue = formNum.Done;
            if (checkValue == true){
                document.getElementById(test).style.color = "blue";
                forms.update(formId, {$set :{Done : false}});
            }
            else {
                document.getElementById(test).style.color = "grey";
                forms.update(formId, {$set :{Done : true}});
            }
        },
		'click .btn' : function(event){
			event.preventDefault();
			var text = document.getElementById('hide').textContent;
			if (text === "Hide") {
                document.getElementById('hide').textContent = "Show";
            }

			else {
				document.getElementById('hide').textContent = "Hide";
			}
		}

	});
}