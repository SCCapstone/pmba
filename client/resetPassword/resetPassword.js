Meteor.subscribe("studentInfo");

Template.resetPassword.events({
    'submit form': function (event) {
        event.preventDefault();
        var emailVar = inputEmail.value;
        console.log(emailVar);
        Meteor.call('resetPass', emailVar);

        swal("An Email has been sent to reset your password if your account was found");
/*
        sAlert.error('An email has been sent to reset your password if your account was found',
            {
                timeout: 1500,
                offset: '120px',
                position: 'bottom'
            });*/
    }
});
