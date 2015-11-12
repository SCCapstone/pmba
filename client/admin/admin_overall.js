if (Meteor.isServer) {
    Meteor.publish("studentInfo", function () {
        return Users.find({});
    });

}
if (Meteor.isClient) {
    Meteor.subscribe("studentInfo");
    Template.adminOverall.helpers({
        studentInfo: function () {
            return studentInfo.find({});

        }

    });

    /*Template.adminOverall.events({
     'clicked .text' : function(event){
     event.preventDefault();

     }
     });*/
}