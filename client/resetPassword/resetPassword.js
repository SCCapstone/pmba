Meteor.subscribe("studentInfo");
Template.resetPassword.events({
    'submit form': function (event) {
        console.log('CLICKED!!!!!!!');
        event.preventDefault();
        var emailVar = inputEmail.value;
        console.log(emailVar);
        Meteor.call('resetPass', emailVar);
    }
});