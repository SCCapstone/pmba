Meteor.subscribe("studentInfo");
Meteor.subscribe("adminInfo");
Template.formsTable.helpers({
    AccountType: function () {
		//forms stuff
        //var student = studentInfo.findOne({_id: Meteor.userId()});
        //var admin = adminInfo.findOne({_id: Meteor.userId()});
        if (student.IDType === 'S') {
            return true;
        }
        else {
            return false;
        }
    }
});