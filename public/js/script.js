// Drum Arrays;
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const toggleDrum = (str, index) => {
  if (index > 15 || index < 0 || str === undefined || index === undefined)
    return;
  switch (str) {
    case "kicks":
      kicks[index] = kicks[index] === false ? true : false;
      return;

    case "snares":
      snares[index] = snares[index] === false ? true : false;
      return;
    case "hiHats":
      hiHats[index] = hiHats[index] === false ? true : false;
      return;
    case "rideCymbals":
      rideCymbals[index] = rideCymbals[index] === false ? true : false;
      return;
  }
};
const clear = str => {
  if (str === undefined) return;
  switch (str) {
    case "kicks":
      kicks.fill(false);
      return;

    case "snares":
      snares.fill(false);
      return;
    case "hiHats":
      hiHats.fill(false);
      return;
    case "rideCymbals":
      rideCymbals.fill(false);
      return;
  }
};
const invert = str => {
  if (str === undefined) return;
  switch (str) {
    case "kicks":
      kicks.forEach((item, index) => {
        kicks[index] = kicks[index] === false ? true : false;
      });
      return;

    case "snares":
      snares.forEach((item, index) => {
        snares[index] = snares[index] === false ? true : false;
      });
      return;

    case "hiHats":
      hiHats.forEach((item, index) => {
        hiHats[index] = hiHats[index] === false ? true : false;
      });
      return;

    case "rideCymbals":
      rideCymbals.forEach((item, index) => {
        rideCymbals[index] = rideCymbals[index] === false ? true : false;
      });
      return;
  }
};

const getNeighborPads = (x, y, size) => {
  let neighborArr = [];
  if (x > size - 1 || y > size - 1 || x < 0 || y < 0) {
    return neighborArr;
  } else if (x != 0 && x != size - 1 && y != 0 && y != size - 1) {
    neighborArr[0] = [x - 1, y];
    neighborArr[1] = [x + 1, y];
    neighborArr[2] = [x, y + 1];
    neighborArr[3] = [x, y - 1];
    return neighborArr;
  } else if (x == size - 1 && y == 0) {
    neighborArr[0] = [x - 1, y];
    neighborArr[1] = [x, y + 1];
    return neighborArr;
  } else if (x == 0 && y == 0) {
    neighborArr[0] = [x + 1, y];
    neighborArr[1] = [x, y + 1];
    return neighborArr;
  } else if (x == 0 && y == size - 1) {
    neighborArr[0] = [x + 1, y];
    neighborArr[1] = [x, y - 1];
    return neighborArr;
  } else if (x == size - 1 && y == size - 1) {
    neighborArr[0] = [x - 1, y];
    neighborArr[1] = [x, y - 1];
    return neighborArr;
  } else if (x == 0 || y == 0 || x == size - 1 || y == size - 1) {
    if (x == 0) {
      neighborArr[0] = [x + 1, y];
      neighborArr[1] = [x, y + 1];
      neighborArr[2] = [x, y - 1];

      return neighborArr;
    } else if (y == 0) {
      neighborArr[0] = [x - 1, y];
      neighborArr[1] = [x + 1, y];
      neighborArr[2] = [x, y + 1];
      return neighborArr;
    }
    if (x == size - 1) {
      neighborArr[0] = [x - 1, y];
      neighborArr[1] = [x, y + 1];
      neighborArr[2] = [x, y + 1];
      return neighborArr;
    } else {
      neighborArr[0] = [x - 1, y];
      neighborArr[1] = [x + 1, y];
      neighborArr[2] = [x, y - 1];
      return neighborArr;
    }
  }
};
