//studentInfo = new Mongo.Collection('studentInfo');

Meteor.publish("studentInfo", function () {
    return studentInfo.find();
});

Meteor.startup(function () {
    console.log('Starting UP!');
});

//Meteor method to add a user on the server side
// If we attempt to create a user on the client side it will autologin that new user
Meteor.methods({
    createStudent:function(email, password) {
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
            IDType : "S",
            Form1: false,
            Form2: false,
            Form3: false});
        /* } else {
         console.log("not logged in or not an admin");
         }*/
        console.log('Student Added');
    }
});
