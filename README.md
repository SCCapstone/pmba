### PMBA Readme

### To add an admin account when you start from scratch do the following.

1. In the /server/addStudent/addStudent.js add the following in the Meteor.startup block

    Meteor.call('createStudent', 'email address', 'password', 'A', 'firstname', 'lastname', '' );
    
    Where you supply your own values for email address, password and first and last name.
    
2. Then a few lines down edit the if statement in the create student function to look like this:

    if (Meteor.userId() && adminInfo.findOne(Meteor.userId()) || true)
    
3. Save the file and let meteor restart or start meteor

4. You should now have an admin account with the email and password you provided

5. Undo the changes you made to the code


---

####Instructions for unit and integration testing
  The testing modules use mocha, chai, and chai-http as their foundation.
  The command to run the tests is "meteor test --driver-package practicalmeteor:mocha."

