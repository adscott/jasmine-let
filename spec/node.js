jasmine = require('jasmine-node');

require('./let_spec');

var jasmineEnv = jasmine.getEnv();
jasmineEnv.reporter = new jasmine.ConsoleReporter();
jasmineEnv.execute();
