Meteor.subscribe("studentInfo");
Meteor.subscribe("forms");
Meteor.subscribe("FormStatus");
Template.student.helpers({
    Student: function () {
        var student = studentInfo.findOne({_id: Meteor.userId()});
        var studentEmail = student.Email;
        if (Session.get("hideCompleted")) {
            return FormStatus.find({$and: [{Email: studentEmail}, {Done: {$ne: true}}]});
        } else {
            return FormStatus.find({Email: studentEmail});
        }
    },
    form: function (fNumber) {
        var currentForm = forms.findOne({Name: fNumber});
        return currentForm._id;
    },
    studentName: function() {
        var student = studentInfo.findOne({_id: Meteor.userId()});
        var firstName = student.FirstName;
        var lastName = student.LastName;
        var fullName = firstName + " " + lastName;
        return fullName;
    },
    hideCompleted: function () {
        return Session.get("hideCompleted");
    },
    selectedForm: function () {
        return Session.get("selectedForm");
    },
    formComplete: function(name) {
        var email = studentInfo.findOne(Meteor.userId(), {fields: {Email: 1}}).Email;
        var result = FormStatus.find({$and: [{Email: email}, {FormName: name},{Done: true}]}).count();
        return result;
    },
    forms: function () {
        var email = studentInfo.findOne(Meteor.userId()).Email;
        return FormStatus.find({Email: email});
    },
    studentFormPercent: function () {
        var email = studentInfo.findOne(Meteor.userId(), {fields: {Email: 1}}).Email;
        var numCompleted = FormStatus.find({$and: [{Email: email},{Done: true}]}).count();
        var total = forms.find().count();
        var percentage = numCompleted / total;
        return (percentage * 100).toFixed(0);
    },
    getFormId: function(FormStatusId) {
        var FormName = FormStatus.findOne(FormStatusId).FormName;
        return forms.findOne({Name: FormName})._id;
    },
    getFormDueDate: function(FormStatusId) {
        var FormName = FormStatus.findOne(FormStatusId).FormName;
        return forms.findOne({Name: FormName}).DueDate;
    },
	getFinishedStatus: function(FormStatusId){
		var formFinishedStatus = FormStatus.findOne(FormStatusId).Finished;
		var returnString;
		if(formFinishedStatus === ""){
			returnString = "form has not been completed";
			return returnString;
		}
		else{
			returnString = formFinishedStatus;
			return returnString;
		}
	}
});

Template.student.events({
    'click .btn' : function(event) {
        event.preventDefault();
        var name = this.FormName;
        var email = studentInfo.findOne(Meteor.userId(), {fields: {Email: 1}}).Email;
        var formId = FormStatus.findOne({Email: email, FormName: name})._id;
        var complete = FormStatus.find({$and: [{Email: email}, {FormName: name},{Done: true}]}).count();
		
        // If form is Done then mark false else make it Done and adds the time it was marked Done
        if (complete) {
            FormStatus.update({_id: formId}, {$set: {Done:false, Finished: ""}});
			var cursor = forms.find();
			cursor.forEach(function (doc) {
				if(doc.Name == name)
					{
						var o = {};
						o[doc.Name] = "Incomplete";
						formTableInfo.update({_id: formTableInfoStudentID}, {
							$set:(o)
						})		
					}	
			});
            sAlert.warning('Form has not been completed.',
                {
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'
                });
        }
        else {
			var timeStamp = new Date();
			var dateStamp = timeStamp.toLocaleString();
            FormStatus.update({_id: formId}, {$set: {Done:true, Finished: dateStamp}});
			var cursor = forms.find();
			cursor.forEach(function (doc) {
				if(doc.Name == name)
					{
						var o = {};
						o[doc.Name] = "Complete";
						formTableInfo.update({_id: formTableInfoStudentID}, {
							$set:(o)
						})		
					}	
			});
            sAlert.success('Form has been completed!',
                {
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'
                });
        }
    },
    "click .hide-completed": function (event) {
        event.preventDefault();
        var text = document.getElementById('hide').value;
        if (text === "Hide Completed Forms") {
            Session.set('hideCompleted', true);
            document.getElementById('hide').value = "Show Completed Forms";
        }
        else {
            Session.set('hideCompleted', false);
            document.getElementById('hide').value = "Hide Completed Forms";
        }
    }
});
