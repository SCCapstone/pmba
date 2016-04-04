Template.updateHelpInfo.events({
    'submit form': function (event) {
        event.preventDefault();

        adminInfo.update(adminInfo.findOne({_id: "contactInfo"})._id,
            {
                $set: {
                    contactEmail: email.value,
                    contactPhone: phone.value
                }
            });

        swal("Information Updated!", "The information has been successfully saved.");
        Router.go('/helpPage')
    }
});

Template.updateHelpInfo.helpers({
    contactInfo: function () {
        return adminInfo.find({_id: "contactInfo"});
    }
});
