
Meteor.publish("forms", function () {
    return forms.find({});
});

Meteor.methods({
    addForm: function (name, description, dueDate, num, pic) {
        /* if (Meteor.userId() &&
         studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'A') {*/
        var formIsThere = forms.find({Name: name}, {limit: 1}).count() > 0;
        if (formIsThere) {
            console.log("A Form With That Name Already Exists");
        }
        else {
            console.log("INSERTING FORM INFO");
            forms.insert({
                Name: name,
                Description: description,
                DueDate: dueDate,
                FormNumber: num,
                FormPicture: pic
            });

            // Loop through all students and add the new form
            var cursor = studentInfo.find();
            cursor.forEach(function (doc) {
                console.log(doc.Email);
                var email = doc.Email;

                console.log("INSERTING FORM INFO FOR: " + email);
                FormStatus.insert({
                    Email: email,
                    FormNumber: num,
                    FormName: name,
                    Done: false
                });
            });
            //}
            /* else {
             console.log("Can't add form not logged in or not an admin");
             }*/
        }
    },
    //this functions removes selected forms from the database
    deleteForm:  function ( deleteID, deleteFormName ) {
        forms.remove(deleteID);
        FormStatus.remove({FormName:deleteFormName});
    }
});