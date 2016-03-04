
    Meteor.subscribe("studentInfo");
    Meteor.subscribe("forms");

    Template.adminOverall.helpers({
        studentInfo: function () {
            return studentInfo.find({});
        },
        forms: function () {
            return forms.find({});
        },
        // This works but should probably executed on server
        formPercent: function (name) {
            var numCompleted = FormStatus.find({$and: [{'FormName': name},{Done: true}]}).count();
            var total = studentInfo.find().count();
            var percentage = numCompleted / total;
            return (percentage * 100).toFixed(0);

        }
    });

    Template.adminOverall.events({
        'click .btn' : function(event){
            event.preventDefault();
        },
        'click .delete' :  function(event) {
            var value = confirm("Are you sure you want to delete this user?");
            //if statement that goes through the process of deleting a user
            if (value == true) {
                var holder;
                var deleteEmail;
                var deleteID = event.target.id;
                var account = studentInfo.findOne({_id:deleteID });
                //if the selected account is a student then it will enter the if statement
                //this if statement calls a function to remove the student account from the database
                if (account.IDType === 'S') {
                    holder = studentInfo.findOne({_id: deleteID});
                    deleteEmail = holder.Email;
                    Meteor.call('deleteAccount', deleteID, deleteEmail, true );
                    sAlert.warning('You removed a user.',
                        {
                            onClose: function () {
                                Router.go('/admin_overall');
                            },
                            timeout: 1500,
                            offset: '40px',
                            position: 'bottom'
                        });
                }
                //if the selected account is a admin then it will enter the else statement
                //this else statement calls a function to remove the admin account from the database
                else {
                    holder = adminInfo.findOne({_id: deleteID});
                    deleteEmail = holder.Email;
                    Meteor.call('deleteAccount', deleteID, deleteEmail, false );
                    sAlert.warning('You removed a user.',
                        {
                            onClose: function () {
                                Router.go('/admin_overall');
                            },
                            timeout: 1500,
                            offset: '40px',
                            position: 'bottom'
                        });
                }
                //Session.get("selectedStudent"); work in progress for a list of people to be deleted
                return true;
            }
            //returns false if the user decides not to delete an account
            else {
                return false;
            }
        }
    });