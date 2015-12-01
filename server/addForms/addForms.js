Meteor.publish("forms", function () {
    return forms.find({});
});

Meteor.methods({
    addForm: function (name, description, dueDate) {
        /* if (Meteor.userID() &&
         studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'A') {*/
       /* var $checkName = {};
        $checkName['Name'] = name;
        if (forms.findOne({Name: $checkName}, {fields: {Name: 1}}) != null) {*/
            console.log("INSERTING FORM INFO");
            forms.insert({
                Name: name,
                Description: description,
                DueDate: dueDate
            });
            var $set = {};
            $set['Forms.' + name] = false;
            studentInfo.upsert({},
                {$set: $set}, {multi: true});
        /* }
        else {
            console.log("A Form With That Name Already Exists");
        }*/
        //}
       /* else {
            console.log("Can't add form not logged in or not an admin");
        }*/
    }
});