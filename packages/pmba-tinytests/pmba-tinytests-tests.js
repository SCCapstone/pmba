// Write your tests here!
// Here is an example.
Tinytest.add('Example Test', function (test) {
  test.equal(true, true);
});

if (Meteor.isServer) {
    Meteor.methods({
        'test/method': function () {
            return true;
        }
    });

    /*Tinytest.addAsync('CAN A NEW USER BE CREATED', function( test, next ) {
      //var newUser = Meteor.call('createStudent', 'tiny@test.com', 'tiny', 'S', 'Tiny', 'Test', '');
        Meteor.call(addStudent.createStudent());
        next();
    });*/


    Tinytest.add('Check studentInfo Collection', function(test) {
        var studentInfo = {};
        studentInfo.find = function (selector, options) {
            test.equal(studentInfo.find(), 1);
        };
    });

}

if (Meteor.isClient) {
    testAsyncMulti("Test Method on Client", [
        function (test, expect) {
            Meteor.call('test/method', expect(function (err, res) {
                test.isTrue(res);
            }));
        }
    ]);
}

