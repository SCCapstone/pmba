Meteor.publish("forms", function () {
    return forms.find({});
});
Meteor.publish("studentInfo", function () {
    return studentInfo.find({});
});

Meteor.methods({
    formPercent: function (name) {
        console.log('Form name = ' +name);
        var $qry = {};
        $qry['Forms.' +name] = true;
        var numCompleted = studentInfo.find($qry).count();
        var total = studentInfo.find().count();
        var percentage = numCompleted / total;
        console.log('percentage = ' + percentage*100 +'%');
        return percentage * 100;
    }
});