
if (Meteor.isServer) {
    Meteor.publish("login", "adminInfo", function () {
        return adminInfo.find({});
    });
}
if (Meteor.isClient) {
    //Meteor.subscribe("login");
    Meteor.subscribe("adminInfo");
    Template.updateAdminInfo.events({
        'submit form' : function(event){
            event.preventDefault();
            adminInfo.update({_id: Meteor.userId()},{$set:{
                FirstName : firstName.value,
                LastName : lastName.value,
                CellNumber : cellNumber.value,
                WorkNumber : workNumber.value,
                HomeNumber : homeNumber.value,
                Picture : "Upic1"}});

            alert("Your information has been updated!");
            window.location.href = "/adminOverall";
        }
    });
}
