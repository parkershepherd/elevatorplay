var spawn = require('child_process').spawn;
require('colors');

module.exports = function(done) {

  var command = process.argv.slice(2);
  if (command.length === 0) {
    console.error('Usage: elevatorplay <command>'.red);
    process.exit(1);
  }

  var child = spawn(command[0], command.slice(1), {
    env: process.env,
    shell: true,
    stdio: 'inherit'
  });
  child.on('close', function(code) {
    done(code);
  });
}
