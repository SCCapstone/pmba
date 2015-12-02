Meteor.publish("studentInfo", function () {
    return studentInfo.find();
});

Meteor.startup(function () {
    console.log('Starting UP!');
});


//Meteor method to add a user on the server side
// If we attempt to create a user on the client side it will autologin that new user
Meteor.methods({
    createStudent:function(email, password, accountType) {
        // used to get the userId from createUser to set un studentInfo
        var userId;
       /*if (Meteor.userID() &&
                studentInfo.findOne(Meteor.userId(), {fields: {'IDType': 1}}).IDType == 'A') */{
            userId = Accounts.createUser({
                email: email,
                password: password
            });
        }
        console.log("INSERTING STUDENT INFO");
        studentInfo.insert({
            _id: userId,
            Email: email,
            IDType: accountType
        });

        var cursor = forms.find();
        cursor.forEach(function(doc){
            console.log(doc.Name + "\t" + userId);
            var $set = {};
            $set['Forms.' + doc.Name] = false;
            studentInfo.upsert(userId,
                { $set: $set}, {multi: true});
        });

        console.log('Student Added');
        /* } else {
         console.log("not logged in or not an admin");
         }*/
    },

    /*updateAllStudents:function() {
        var studentCursor = studentInfo.find();
        studentCursor.forEach(function (student) {
        var formCursor = forms.find();

        formCursor.forEach(function (doc) {
            var $set = {};
            $set['Forms.' + doc.Name] = false;
            studentInfo.upsert(student,
                {$set: $set}, {multi: true});
        });
    });
    }*/
});
