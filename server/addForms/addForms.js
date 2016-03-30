
Meteor.publish("forms", function () {
    return forms.find({});
});

Meteor.methods({
    addForm: function (name, description, formAddress, dueDate, num, pic) {
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
                FormAddress: formAddress,
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
                    Done: false,
					Finished: ""
                });
				
				var studentName = doc.FirstName + " " + doc.LastName;
				//to insert a new row in a mongo document you must create an "object" then use $set to place the object in the collection
				var o = {}
				o[name] = "Incomplete";
				formTableInfo.update({Name: studentName}, {
					$set:(o)
				})
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
		
		//This loops through the formTableInfo collection and removes all elements with the "deleteFormName"
		var cursor = formTableInfo.find();
			cursor.forEach(function (doc) {
				var id = doc._id;
				var o = {};
				o[deleteFormName] = ""
				formTableInfo.update({_id: id}, {
					$unset:(o)
				})
			});
	}
});