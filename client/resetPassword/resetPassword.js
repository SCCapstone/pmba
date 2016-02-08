Meteor.subscribe("studentInfo");
// Config for sAlert popups
Meteor.startup(function () {
    sAlert.config({
        effect: '',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        // or you can pass an object:
        // stack: {
        //     spacing: 10 // in px
        //     limit: 3 // when fourth alert appears all previous ones are cleared
        // }
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
        onClose: _.noop //
        // examples:
        // onClose: function() {
        //     /* Code here will be executed once the alert closes. */
        // }
    });
});

Template.resetPassword.events({
    'submit form': function (event) {
        event.preventDefault();
        var emailVar = inputEmail.value;
        console.log(emailVar);
        Meteor.call('resetPass', emailVar);

        sAlert.error('An email has been sent to reset your password if your account was found',
            {
                onClose: function() {
                    Router.go('/login');
                },
                timeout: 1500,
                offset: '120px',
                position: 'bottom'
            });
    }
});
