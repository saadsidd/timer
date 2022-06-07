const alarm = function(alarms) {
  if (!alarms) return;

  for (let time of alarms) {
    time = Number(time);

    if (time <= 0 || isNaN(time)) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }

  }
};

const args = process.argv.slice(2);
alarm(args);