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

if (Meteor.isServer) {
    Meteor.publish("forms", function () {
        //var c = forms.find().count();
        //alert(c);
        return forms.find({});
    });

}
if (Meteor.isClient) {
    Meteor.subscribe("forms");
    Template.student.helpers({
        forms: function () {
            //var c =forms.find({}).count();
            //alert(c);
            return forms.find({});

        }
    });
    Template.student.events({
        'click .toggle-checked' : function(event){
            event.preventDefault();

        }
    })
}