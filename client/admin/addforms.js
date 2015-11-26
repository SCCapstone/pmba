
    Meteor.subscribe("forms");
    Template.student.helpers({
        forms: function () {
            return forms.find({});

        }
    });
    Template.student.events({
        'click .toggle-checked' : function(event){
            event.preventDefault();

        }
    });
/*
if (Meteor.isClient) {
    //Meteor.subscribe("login");
    Meteor.subscribe("forms");
    Template.addforms.events({
        'submit form' : function(event){
            //var userid = window.location.hash.substring(1);//selects current user email from url
            //var user1 = login.findOne({UserID: userid});
            //var user2 = studentInfo.findOne({UserID: userid});
            //var id1 = user1._id;
            //var id2 = user2._id;
            //Users.update({_id: id2},{$set:{
            //the code above needs to be fixed, but the insert command will not update, only creates a new entry
            forms.insert({
                Name : inputName.value,
                Description : inputDescribe.value,
                DueDate : duedate.value});
            //login.update({_id: id1}, {$set:{UserID: inputEmail.value}});
            alert("Your information has been updated!");
        }
    });
}*/
