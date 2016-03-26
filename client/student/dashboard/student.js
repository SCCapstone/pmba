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
        return FormStatus.find();
    },
    studentFormPercent: function () {
        var email = studentInfo.findOne(Meteor.userId(), {fields: {Email: 1}}).Email;
        var numCompleted = FormStatus.find({$and: [{Email: email},{Done: true}]}).count();
        var total = forms.find().count();
        var percentage = numCompleted / total;
        return (percentage * 100).toFixed(0);
    }
});
/*
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

});*/

Template.student.events({
    'click .alert' : function(event) {
        event.preventDefault();
        var name = this.FormName;
        var email = studentInfo.findOne(Meteor.userId(), {fields: {Email: 1}}).Email;
        var formId = FormStatus.findOne({Email: email, FormName: name})._id;
        var complete = FormStatus.find({$and: [{Email: email}, {FormName: name},{Done: true}]}).count();

        // If form is Done then mark false else make it Done
        if (complete) {
            FormStatus.update({_id: formId}, {$set: {Done:false}});
            sAlert.warning('Form has not been completed.',
                {
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'
                });
        }
        else {
            FormStatus.update({_id: formId}, {$set: {Done:true}});
            sAlert.success('Form has been completed!',
                {
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'
                });
        }
    }
});
