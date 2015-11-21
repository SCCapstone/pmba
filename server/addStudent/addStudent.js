//studentInfo = new Mongo.Collection('studentInfo');

Meteor.publish("studentInfo", function () {
    return studentInfo.find();
});

Meteor.startup(function () {
    console.log('Starting UP!');
});

Meteor.methods({
    createStudent:function(email, password) {
        // used to get the userId from createUser to set un studentInfo
        var userId;
        //if (Meteor.user() /*&& Meteor.user().admin === true*/) {
        userId = Accounts.createUser({
            email: email,
            password: password
        });
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
