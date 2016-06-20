#!/usr/bin/env node

var elevatorMusic = require('./lib/elevator-music');
var runCommand = require('./lib/run-command');

elevatorMusic.start();

runCommand(function (code) {
  elevatorMusic.stop();
  process.exit(code);
})

process.on('uncaughtException', elevatorMusic.stop);
