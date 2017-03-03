//var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  specs: ['./dist/specs/**/*.spec.js'],
  suites: { },

  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  chromeDriver: './node_modules/chromedriver/lib/chromedriver/chromedriver.exe',

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  allScriptsTimeout: 11000,

  onPrepare: function() {
    //jasmine.getEnv().addReporter(new SpecReporter());
    browser.ignoreSynchronization = true;
  }
};
