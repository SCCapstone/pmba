Meteor.publish("forms", function () {
    return forms.find({});
});

Meteor.methods({
    addForm: function (name, description, dueDate) {
       /* if (Meteor.userID() &&
            studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'A') {*/

            console.log("INSERTING FORM INFO");
            forms.insert({
                Name: name,
                Description: description,
                DueDate: dueDate
            });
            console.log('Form Added');
        //}
       /* else {
            console.log("Can't add form not logged in or not an admin");
        }*/
    }
});