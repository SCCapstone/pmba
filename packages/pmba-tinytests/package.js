Package.describe({
  name: 'pmba-tinytests',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Provides unit tests for pmba application',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null,

  internal: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('pmba-tinytests.js');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('pmba-tinytests');


  api.addFiles('test-stubs.js', 'client', 'server');
  api.addFiles('pmba-tinytests-tests.js');

  //Change the path of the files below
  //Meteor 1.2 broke tiny test's use of relative path
  //so we must use absolute paths
  api.addFiles('/Users/j/CSCE490/pmba/lib/publications.js', 'client', 'server');
  api.addFiles('/Users/j/CSCE490/pmba/server/addStudent/addStudent.js', 'client', 'server');
  api.addFiles('/Users/j/CSCE490/pmba/client/addStudent/addStudent.js', 'client', 'server');

  // add package dependencies
  api.use(["spacebars", "tinytest", "test-helpers"]);

  // in particular, you'll probably want to use the 'templating' package for any UI related tests
  api.use("templating", "client");
});
