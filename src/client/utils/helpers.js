const incrementTime = (time) => {
  let min = Number(time.slice(0, 2));
  let sec = Number(time.slice(3, 5));

  if (sec >= 59) {
    min++;
    sec = 0;
  } else {
    sec++;
  }

  if (min < 10) {
    min = `0${min.toString()}`;
  } else {
    min = min.toString();
  }

  if (sec < 10) {
    sec = `0${sec.toString()}`;
  } else {
    sec = sec.toString();
  }

  return `${min}:${sec}`;
};

const checkForWin = () => {
  
};

module.exports = {
  incrementTime,
  checkForWin,
};
