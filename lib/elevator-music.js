var spawn = require('child_process').spawn;
var musicFile = __dirname + '/../sounds/elevator-music.mp3';

var playIndefinitely = true;
var player;

function playMP3() {
  player = spawn('afplay', [musicFile], {shell: true});
  player.stdout.pipe(process.stdout);
  player.stderr.pipe(process.stderr);
  player.on('close', function(code) {
    if (playIndefinitely && code === 0) {
      playMP3();
    }
  })
}

module.exports = {
  start: function() {
    if (player) {
      player.kill();
    }
    playIndefinitely = true;
    playMP3();
  },
  stop: function() {
    playIndefinitely = false;
    if (player) {
      player.kill();
    }
  }
};
