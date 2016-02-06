
    Meteor.subscribe("forms");
    Meteor.subscribe("FormStatus");

    Template.addForms.helpers({
        forms: function() {
            return forms.find();
        }
    });

    Template.addForms.events({
        'submit form' : function(event){
            event.preventDefault();
            var num = forms.find({}).count() + 1;
            //This is temp and not the final way to handle the form number and form picture
            var formNum = "Form"+num;
            var formPic = "Fpic"+num;
            var name = inputName.value;
            var description = inputDescription.value;
            var dueDate = date.value;
            Meteor.call('addForm', name, description, dueDate, formNum, formPic );

            window.location.href = "/addForms";
        },
        'click .delete' : function(event) {
            var deleteID = event.target.id;
            var holder = forms.findOne({_id: deleteID});
            var deleteFormName = holder.Name;
            Meteor.call('deleteForm', deleteID, deleteFormName );
        }
    });
