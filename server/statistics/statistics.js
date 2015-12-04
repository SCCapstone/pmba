/**
 * Created by userpc on 11/5/2015.
 */
Meteor.methods({
		getNumStudentsFormXCompleted: function(number){
		var formName = "Forms.Name" + number;
		var numStudents = studentInfo.find({IDType: { $in: ['S']}}).count();
		var completedForm = studentInfo.find({$and: [{formName: true}, {'IDType': 'S'}]}).count();
		
		if(completedForm != 0){
			var percentCompleted = (numStudents / completedForm) * 100;
		}
		else{
			percentCompleted = 0;
		}
		
		var percentIncomplete = 100-percentCompleted;

	}
});