Meteor.subscribe("adminInfo");

Template.updateWelcomeInfo.helpers({
    contactInfo: function () {
        return adminInfo.find({_id: "contactInfo"});
    }
});

Template.updateWelcomeInfo.events({
    'submit form' : function(event) {
        event.preventDefault();

        adminInfo.update(adminInfo.findOne({_id: "contactInfo"})._id,
            {
                $set: {
                    welcomeMessage: welcomeMessage.value
                }
            });

        swal("Information Updated!", "The information has been successfully saved.");
        Router.go('/welcomePage')
    }
});