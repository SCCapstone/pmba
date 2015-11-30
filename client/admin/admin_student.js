
    Meteor.subscribe("forms");
    Meteor.subscribe("studentInfo");

    Template.adminStudent.helpers({
        forms: function () {
            return forms.find({});

        },
        studentInfo: function() {
            var temp = "ID";
            temp = temp +2;
            return studentInfo.find({UserID: temp});
        },
        /** This function returns an array containing the fields for the student stored in the session
         variable 'selectedStudent so that it can be iterated over and displayed'
         **/
        data: function() {
            return studentInfo.find(Session.get('selectedStudent')).fetch();
        }

    });

