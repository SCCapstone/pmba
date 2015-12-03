Meteor.publish("forms", function () {
    return forms.find({});
});
Meteor.publish("studentInfo", function () {
    return studentInfo.find({});
});

Meteor.methods({
    formPercent: function (name) {
        var $qry = {};
        $qry['Forms.' +name] = true;
        var numCompleted = studentInfo.find($qry).count();
        var total = studentInfo.find().count();
        var percentage = numCompleted / total;
        return percentage * 100;
    }
});