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
    }
});
Template.student.events({
    'click .toggle-checked' : function(event){
        event.preventDefault();
        var formId = this._id;
        var form = FormStatus.findOne({_id: formId});
        var checkValue = form.Done;

        if (checkValue == true){
            document.getElementById(formId).style.color = "blue";
            FormStatus.update(formId, {$set :{Done : false}});
            sAlert.warning('You have not completed the form.',
                {
                    onClose: function () {
                        Router.go('/student');
                    },
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'
                });
        }
        else {
            document.getElementById(formId).style.color = "green";
            FormStatus.update(formId, {$set :{Done : true}});
            sAlert.success('You have completed the form!',
                {
                    onClose: function () {
                        Router.go('/student');
                    },
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'

                });
        }
    },
    'click .btn' : function(event){
        event.preventDefault();
    },
    "click .hide-completed": function (event) {
        event.preventDefault();
        var text = document.getElementById('hide').value;
        if (text === "Hide") {
            Session.set('hideCompleted', true);
            document.getElementById('hide').value = "Show";
        }
        else {
            Session.set('hideCompleted', false);
            document.getElementById('hide').value = "Hide";
        }

    }

});