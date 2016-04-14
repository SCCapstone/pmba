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
		return FormStatus.find({FormName: name, Done:false});
    },
	studentId: function(email) {
		var returnID = studentInfo.findOne({Email: email})._id;
		return returnID;
	}
});