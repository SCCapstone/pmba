Meteor.publish("studentInfo", function () {
    return studentInfo.find();
});
Meteor.publish("FormStatus", function () {
    return FormStatus.find();
});
Meteor.publish("formTableInfo", function () {
    return formTableInfo.find();
});

Meteor.publish("forms", function () {
    return forms.find();
});

Meteor.startup(function () {
    console.log('Starting UP!');
});


//Meteor method to add a user on the server side
// If we attempt to create a user on the client side it will autologin that new user
Meteor.methods({
    createStudent:function(email, password, accountType, firstName, lastName, date) {
        // used to get the userId from createUser to set up studentInfo
        var userId;
        // Must be Admin to create user
        if (Meteor.userId() && adminInfo.findOne(Meteor.userId()))
        {
            userId = Accounts.createUser({
                email: email,
                password: password
            });
        // Insert info in adminInfo if they are Admin
        if (accountType == 'A') {
            adminInfo.insert({
                _id: userId,
                Email: email,
                IDType: accountType,
                FirstName: firstName,
                LastName: lastName,
                CellNumber: "",
                HomeNumber: "",
                WorkNumber: "",
                FinishDate: date,
                FullName: firstName + " " + lastName
            });
        }
        // Insert info in adminInfo if they are Student
        else if (accountType == 'S') {
            studentInfo.insert({
                _id: userId,
                Email: email,
                IDType: accountType,
                FirstName: firstName,
                LastName: lastName,
                CellNumber: "",
                HomeNumber: "",
                WorkNumber: "",
                FinishDate: date,
                FullName: firstName + " " + lastName,
                SentEmails: 0
            });
			
			
            var cursor = forms.find();
            cursor.forEach(function (doc) {
                var name = doc.Name;
                var num = doc.FormNumber;
                FormStatus.insert({
                    Email: email,
                    FormNumber: num,
                    FormName: name,
                    Done: false
                })
            });
			
			//create the initial entry for this student
			var fullname = firstName + " " + lastName;
			formTableInfo.insert({
                   Name: fullname
			});
			var cursor = forms.find();
            cursor.forEach(function (doc) {
                formTableInfo.update({Name: fullname}, {
					//creates set o to insert into the collection
					$set:(o = {}, o[doc.Name] = "Incomplete", o)
				})				
				});
            // Send Enrollment Email to the new user
           // Accounts.sendEnrollmentEmail(userId);
		   console.log("Student Added.")
		}
		}		
		 else {
         console.log("not logged in or not an admin");
         }
    }
});
