/**
 * Created by userpc on 11/5/2015.
 */
Meteor.methods({
    getStats:function() {
    },
	getNumStudentsFormXCompleted: function(number){
		var formName = "Forms.Name" + number;
		var numStudents = studentInfo.find({IDType: { $in: ['S']}}).count();
		console.log(numStudents + " total number of students.");
		var completedForm = studentInfo.find({$and: [{formName: true}, {'IDType': 'S'}]}).count();
		console.log(completedForm + " number of students with form " + number + " completed");
		
		if(completedForm > 0){
			var percentCompleted = (numStudents / completedForm) * 100;
		}
		else{
			percentageCompleted = 0;
		}
		console.log(percentCompleted + " percentage done with form " + number);
	}
});