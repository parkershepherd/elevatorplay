var spawn = require('child_process').spawn;
var musicFile = __dirname + '/../sounds/elevator-music.mp3';
var bellFile = __dirname + '/../sounds/bell.mp3';

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

function playBell() {
  bellPlayer = spawn('afplay', [bellFile], {shell: true});
  player.stdout.pipe(process.stdout);
  player.stderr.pipe(process.stderr);
}

module.exports = {
  start: function() {
    if (player) {
      player.kill();
    }
    if (bellPlayer) {
      bellPlayer.kill();
    }
    playIndefinitely = true;
    playMP3();
  },
  stop: function() {
    playIndefinitely = false;
    if (player) {
      player.kill();
    }
    playBell();
  }
};
