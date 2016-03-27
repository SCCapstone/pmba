

//Meteor.subscribe("login");
Meteor.subscribe("adminInfo");
Template.updateAdminInfo.events({
    'submit form' : function(event){
        event.preventDefault();

        studentInfo.update(Session.get('selectedStudent'),
            {$set:{
                FirstName : firstName.value,
                LastName : lastName.value,
                WorkNumber : workNumber.value,
                Address : address.value,
                Picture : "Upic1"}
            });

        sAlert.success('Your Information Has Been Updated',
            {
                onClose: function () {
                    Router.go('/admin_Overall');
                },
                timeout: 1500,
                offset: '40px',
                position: 'bottom'
            });
    }
});

Template.updateAdminInfo.helpers({
    students: function () {
        return studentInfo.find(Session.get('selectedStudent'));
    }
});
