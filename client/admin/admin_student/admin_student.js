
Meteor.subscribe("forms");
Meteor.subscribe("studentInfo");

Template.adminStudent.helpers({
    forms: function () {
        return forms.find();

    },
    studentInfo: function() {
        var temp = "ID";
        temp = temp +2;
        return studentInfo.find({UserID: temp});
    },
    /** This function returns an array containing the fields for the student stored in the session
     variable 'selectedStudent so that it can be iterated over and displayed'
     **/
    profile: function() {
        return studentInfo.find(Session.get('selectedStudent')).fetch();
    },
    formComplete: function(name) {
        var email = studentInfo.findOne(Session.get('selectedStudent'), {fields: {Email: 1}}).Email;
        var result = FormStatus.find({$and: [{Email: email}, {FormName: name},{Done: true}]}).count();
        return result;
    },
    studentFormPercent: function () {
        var email = studentInfo.findOne(Session.get('selectedStudent'), {fields: {Email: 1}}).Email;
        var numCompleted = FormStatus.find({$and: [{Email: email},{Done: true}]}).count();
        var total = forms.find().count();
        var percentage = numCompleted / total;
        return (percentage * 100).toFixed(0);
    }
});

// When admin clicks inside the alert bubble it will mark the form done or not done
Template.adminStudent.events({
    'click .btn' : function(event) {
        event.preventDefault();
        console.log('You clicked me');
        var name = this.Name;
        var email = studentInfo.findOne(Session.get('selectedStudent'), {fields: {Email: 1}}).Email;
        var formId = FormStatus.findOne({Email: email, FormName: name})._id;
        var complete = FormStatus.find({$and: [{Email: email}, {FormName: name},{Done: true}]}).count();

        // If from is Done then mark false else make it Done
        if (complete) {
            console.log('form complete');
            FormStatus.update({_id: formId}, {$set: {Done:false}});

            sAlert.warning('Form has not been completed.',
                {
                    onClose: function () {
                        Router.go('/admin_student');
                    },
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'

                });
        }
        else {
            console.log('form not complete');
            FormStatus.update({_id: formId}, {$set: {Done:true}});

            sAlert.success('Form has been completed!',
                {
                    onClose: function () {
                        Router.go('/admin_student');
                    },
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'
                });
        }
    }
});
