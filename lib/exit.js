/*
 * exit
 * https://github.com/cowboy/node-exit
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function exit(exitCode, streams) {
  var fs = require('fs');
  var data = new Buffer('');
  if (!streams) { streams = [process.stdout, process.stderr]; }
  process.on('exit', function() {
    streams.forEach(function(stream) {
      fs.writeSync(stream.fd, data, 0, data.length, stream.pos);
    });
  });
  process.exit(exitCode);
};
