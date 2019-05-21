// Use this presets array inside your presetHandler
const presets = require("./presets");

// Complete this function:
const presetHandler = (str, index, newPresetArray) => {
  let returnedArr = [];
  switch (str) {
    case "GET":
      if (presets[index]) {
        returnedArr[0] = 200;
        returnedArr[1] = presets[index];
        return returnedArr;
      } else {
        returnedArr[0] = 404;
        return returnedArr;
      }
    case "PUT":
      if (presets[index]) {
        presets[index] = newPresetArray;
        returnedArr[0] = 200;
        returnedArr[1] = presets[index];
        returnedArr[2] = newPresetArray;
        return returnedArr;
      } else {
        returnedArr[0] = 404;
        return returnedArr;
      }
    default:
      returnedArr[0] = 400;
      return returnedArr;
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
