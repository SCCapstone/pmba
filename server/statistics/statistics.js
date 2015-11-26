/**
 * Created by userpc on 11/5/2015.
 */
Meteor.methods({
    getStats:function() {
        var numStudents = studentInfo.find().count();
            
    }
});