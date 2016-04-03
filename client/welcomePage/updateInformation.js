Meteor.subscribe("adminInfo");

Template.updateInformation.helpers({
    contactInfo: function () {
        return adminInfo.find({_id: "contactInfo"});
    }
});

Template.updateInformation.events({
    'submit form' : function(event) {
        event.preventDefault();

        adminInfo.update(adminInfo.findOne({_id: "contactInfo"})._id,
            {
                $set: {
                    contactEmail: email.value,
                    contactPhone: phone.value,
                    welcomeMessage: welcomeMessage.value
                }
            });

        //swal("Information Updated!", "The information has been successfully saved.");
        Router.go('/welcomePage')
    }
});