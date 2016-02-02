
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
            var deleteID = event.target.id;
            var holder = studentInfo.findOne({_id: deleteID});
            var deleteEmail = holder.Email;
            //calls a function on the server side and sends the target id and email
            //function removes the documents with the email or id in the collections
            Meteor.call('deleteAccount', deleteID, deleteEmail );
            //need to add a check for account type and send as a variable to function
        }
    });