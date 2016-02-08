
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
            //grabs targets id and uses it to get targets email
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
            }
            //if the selected account is a admin then it will enter the else statement
            //this else statement calls a function to remove the admin account from the database
            else {
                holder = adminInfo.findOne({_id: deleteID});
                deleteEmail = holder.Email;
                Meteor.call('deleteAccount', deleteID, deleteEmail, false );
            }
            //Session.get("selectedStudent"); work in progress for a list of people to be deleted
        }
    });