
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

            swal({
                title: "Are you sure?",
                text: "You will permanently delete this student!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false },

                function(isConfirm)
                {
                    if (isConfirm) {
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
                            swal("Deleted!", "You removed a student.","success");
                            Router.go('/admin_Overall');
                            /*sAlert.warning('You removed a user.',
                             {
                             onClose: function () {
                             Router.go('/admin_overall');
                             },
                             timeout: 1500,
                             offset: '40px',
                             position: 'bottom'
                             });*/
                        }
                        //if the selected account is a admin then it will enter the else statement
                        //this else statement calls a function to remove the admin account from the database
                        else {
                            holder = adminInfo.findOne({_id: deleteID});
                            deleteEmail = holder.Email;
                            Meteor.call('deleteAccount', deleteID, deleteEmail, false );
                            swal({
                                    title:"Deleted!",
                                    text: "You removed a student.",
                                    type:"success",
                                    confirmButtonText:"Ok"},

                                function(isConfirm)
                                {
                                    if (isConfirm)
                                    {
                                        Router.go('/admin_Overall');
                                    }

                                });
                            /*sAlert.warning('You removed a user.',
                             {
                             onClose: function () {
                             Router.go('/admin_overall');
                             },
                             timeout: 1500,
                             offset: '40px',
                             position: 'bottom'
                             });*/
                        }
                        //Session.get("selectedStudent"); work in progress for a list of people to be deleted
                        return true;
                    }
                    //returns false if the user decides not to delete an account
                    else {
                        return false;

                    }
                });

            //if statement that goes through the process of deleting a user
            /*
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
                    swal("Deleted!", "You removed a student.","success");
                    /*sAlert.warning('You removed a user.',
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
                    swal({
                        title:"Deleted!",
                        text: "You removed a student.",
                        type:"success",
                        confirmButtonText:"Ok"},

                        function(isConfirm)
                        {
                            if (isConfirm)
                            {
                                Router.go('/admin_Overall');
                            }

                    });
                    /*sAlert.warning('You removed a user.',
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
            }*/
        }
    });