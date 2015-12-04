
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
            console.log('Email = ' +email);
            var numCompleted = FormStatus.find({$and: [{Email: email},{Done: true}]}).count();
            console.log('completed = ' + numCompleted);
            var total = forms.find().count();
            var percentage = numCompleted / total;
            console.log('percentage = ' + percentage);
            return percentage * 100;
        }
    });

