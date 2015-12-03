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
            var $set = {};
            $set['Forms.' + name] = false;
            studentInfo.upsert({},
                {$set: $set}, {multi: true});
            //}
            /* else {
             console.log("Can't add form not logged in or not an admin");
             }*/
        }
    }
});
