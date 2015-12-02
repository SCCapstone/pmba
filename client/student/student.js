Meteor.subscribe("studentInfo");
Meteor.subscribe("forms");
Template.student.helpers({
   forms: function () {
       if (Session.get("hideCompleted")) {
           return forms.find({Done: {$ne: true}});
       } else {
           return forms.find({});
       }
   },
    hideCompleted: function () {
        return Session.get("hideCompleted");
    },
    selectedForm: function () {
        return Session.get("selectedForm");
    }

});
Template.student.events({
    'click .toggle-checked' : function(event){
        event.preventDefault();
        var formId = this._id;
        var formNum = forms.findOne({_id: formId});
        var test = formNum.FormNumber;
        var checkValue = formNum.Done;
        if (checkValue == true){
            document.getElementById(test).style.color = "blue";
            forms.update(formId, {$set :{Done : false}});
        }
        else {
            document.getElementById(test).style.color = "grey";
            forms.update(formId, {$set :{Done : true}});
        }
    },
    'click .btn' : function(event){
        event.preventDefault();
    },
    "click .hide-completed": function (event) {
        event.preventDefault();
        var text = document.getElementById('hide').value;

        if (text === "Hide") {
            Session.set('hideCompleted', true);
            document.getElementById('hide').value = "Show";
        }
        else {
            Session.set('hideCompleted', false);
            document.getElementById('hide').value = "Hide";
        }

    }

});