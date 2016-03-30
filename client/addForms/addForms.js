/*
 Purpose: provides the backbone for the admin to
 add forms for the students to complete.

 */

    Meteor.subscribe("forms");
    Meteor.subscribe("FormStatus");

    Template.addForms.helpers({
        forms: function() {
            return forms.find();
        }
    });

    //code snippet from w3 that allows the admin to upload the forms
    //so students can view them
    function insertForm(){
        var form = document.getElementById("form");
        var display = "";
        if ('files' in form) {
            if (form.files.length == 0) {
                display = "Select one or more files.";
            } else {
                for (var i = 0; i < form.files.length; i++) {
                    display += "<br><strong>" + (i+1) + ". file</strong><br>";
                    var file = form.files[i];
                    if ('name' in file) {
                        display += "name: " + file.name + "<br>";
                    }
                    if ('size' in file) {
                        display += "size: " + file.size + " bytes <br>";
                    }
                }
            }
        }
        else {
            if (form.value == "") {
                txt += "Select one or more files.";
            }
        }
        document.getElementById("demo").innerHTML = txt;
    }

    //provides the submit form and delete form actions
    Template.addForms.events({

        'submit form' : function(event){
            event.preventDefault();
            var num = forms.find({}).count() + 1;
            //This is temp and not the final way to handle the form number and form picture
            var formNum = "Form"+num;
            var formPic = "Fpic"+num;

            //establishes the different input values for the form
            var name = inputName.value;
            var description = inputDescription.value;
            var formAddress = inputFormAddress.value;
            var dueDate = date.value;

            //meteor adds the form fields into the system
            Meteor.call('addForm', name, description, formAddress, dueDate, formNum, formPic );

            //shows a success message when the form is added
            sAlert.success('You added a form!',
                {
                    onClose: function () {
						//This is a temp fix, the notation may need to changed later
						location.reload()
                        //Router.go('/addForms');
                    },
                    timeout: 1500,
                    offset: '40px',
                    position: 'bottom'
                });
        },

        'click .delete' : function(event) {

            //confirm message that appears before deleting a form
            var value = confirm("Are you sure you want to delete this form?");

            //if the user says okay, the different portions of the form to be
            //deleted are targeted
            if( value == true ){
                var deleteID = event.target.id;
                var holder = forms.findOne({_id: deleteID});
                var deleteFormName = holder.Name;

                //meteor deletes teh form from the system
                Meteor.call('deleteForm', deleteID, deleteFormName );

                //shows a warning message that a form has been removed
                sAlert.warning('You removed a form.',
                    {
                        onClose: function () {
                            Router.go('/addForms');
                        },
                        timeout: 1500,
                        offset: '40px',
                        position: 'bottom'
                    });
                return true;
            }
            else{
                return false;
            }
        }
    });
