
    //Meteor.subscribe("login");
    Meteor.subscribe("adminInfo");
    Template.updateAdminInfo.events({
        'submit form' : function(event){
            event.preventDefault();
            adminInfo.update({_id: Meteor.userId()},{$set:{
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

