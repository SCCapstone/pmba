Meteor.subscribe("forms");
Meteor.subscribe("studentInfo");
Meteor.subscribe("adminInfo");
Template.infoPage.helpers({
    forms: function () {
        return forms.find({});
    },
    profile: function() {
        return forms.find(Session.get('selectedForm')).fetch();
    },
    AccountType: function () {
        var student = studentInfo.findOne({_id: Meteor.userId()});
        if (student.IDType === 'S') {
            return true;
        }
        else {
            return false;
        }

    },
    students: function () {
		var name = forms.findOne(Session.get('selectedForm')).Name;
		var cursor = FormStatus.find({FormName: name});
		cursor.forEach(function(doc){
			var email = doc.Email;
			var studentName=studentInfo.findOne({Email: email}).FullName;
			var formID = FormStatus.findOne({Email: email, FormName: name})._id;
			alert(studentName);
			FormStatus.update({_id: formId}, {$set: {fullName:studentName}});
			alert("here");
		});
		
		/**var cursor = FormStatus.find({FormName: name, Done: false});
		cursor.forEach(function (doc) {
			var email = doc.Email;
			var studentID = studentInfo.findOne({Email: email})._id;
			Session.set('incompletedStudents', studentID);
			alert(email);
		});
		/**var selected = document.getElementById("SelectedStudents").value;
		if(selected === "completed"){
			alert("done");
		}
		else if(selected === "incompleted"){
			alert("not");
		}
		else{
			alert("all");
		}
		//var cursor = formstatus.find({FormName: name});
		/**
		set up a if ifelse else statement with the ocnditions
			if : selected all, return all students found.
			if else : selected done, return done students
			else : selected not done, return not done students.
		**/
		
        return studentInfo.find(Session.get('incompletedStudents')).fetch();
    }
});