"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGamePowerSet =
  exports.getGameColorCount =
  exports.isValidGame =
  exports.getGameSetsFromLine =
  exports.getGameId =
    void 0;
var getGameId = function (line) {
  var _a;
  var gameName = line.split(":")[0]; // 'Game 1'
  var _b = gameName.split(" "),
    gameId = _b[1]; // '1'
  var result = (_a = Number(gameId.trim())) !== null && _a !== void 0 ? _a : 0;
  return result;
};
exports.getGameId = getGameId;
var getGameSetsFromLine = function (line) {
  var _a = line.split(":"),
    _ = _a[0],
    coloursString = _a[1];
  var gameSets = coloursString.trim().split(";");
  return gameSets;
};
exports.getGameSetsFromLine = getGameSetsFromLine;
var isValidGame = function (maXColorCount, currentColorCount) {
  var isRedValid = maXColorCount.red >= currentColorCount.red;
  var isGreenValid = maXColorCount.green >= currentColorCount.green;
  var isBlueValid = maXColorCount.blue >= currentColorCount.blue;
  return isRedValid && isGreenValid && isBlueValid;
};
exports.isValidGame = isValidGame;
var getGameColorCount = function (gameSet) {
  var colorCountArray = gameSet.trim().split(","); // ['8 green', '6 blue', '20 red']
  var currentColorCount = {
    red: 0,
    green: 0,
    blue: 0,
  };
  colorCountArray.forEach(function (colorCount) {
    var _a = colorCount.trim().split(" "),
      count = _a[0],
      color = _a[1];
    if (color === "red" /* Color.Red */) {
      currentColorCount.red += parseInt(count);
    }
    if (color === "green" /* Color.Green */) {
      currentColorCount.green += parseInt(count);
    }
    if (color === "blue" /* Color.Blue */) {
      currentColorCount.blue += parseInt(count);
    }
  });
  return currentColorCount;
};
exports.getGameColorCount = getGameColorCount;
var getGamePowerSet = function (gameSets) {
  var colorCountArray = gameSets.map(function (gameSet) {
    return getGameColorCount(gameSet);
  });
  var maxColorCount = {
    red: 0,
    green: 0,
    blue: 0,
  };
  colorCountArray.forEach(function (colorCount) {
    if (colorCount.red > maxColorCount.red) {
      maxColorCount.red = colorCount.red;
    }
    if (colorCount.green > maxColorCount.green) {
      maxColorCount.green = colorCount.green;
    }
    if (colorCount.blue > maxColorCount.blue) {
      maxColorCount.blue = colorCount.blue;
    }
  });
  var red = maxColorCount.red,
    green = maxColorCount.green,
    blue = maxColorCount.blue;
  return Number(red) * Number(green) * Number(blue);
};
exports.getGamePowerSet = getGamePowerSet;
