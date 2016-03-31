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
		//var name = forms.find(Session.get('selectedForm')).fetch();
		/**
		1)need to get the form name then seach through formstatus collection
		to get a list of students related to the form.
		2)set up a if ifelse else statement with the ocnditions
			if : selected all, return all students found.
			if else : selected done, return done students
			else : selected not done, return not done students.
		**/
		
        return studentInfo.find({});
    }
});