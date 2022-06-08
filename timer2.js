const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// Interactive timer
stdin.on('data', (key) => {
  
  // Exit process on Ctrl+C (\u0003)
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
  
  // Press b to beep right away
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // Set timer from 1 - 9 seconds
  if (Number(key) > 0) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  }

});