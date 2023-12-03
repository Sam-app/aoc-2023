const getGameId = (line: string) => {
  const [gameName] = line.split(":"); // 'Game 1'
  const [, gameId] = gameName.split(" "); // '1'
  const result = Number(gameId.trim()) ?? 0;
  return result;
};

const enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

interface ColorCount {
  red: number;
  green: number;
  blue: number;
}
const getGameSetsFromLine = (line: string) => {
  const [_, coloursString] = line.split(":");
  const gameSets = coloursString.trim().split(";");
  return gameSets;
};

const isValidGame = (
  maXColorCount: ColorCount,
  currentColorCount: ColorCount
) => {
  const isRedValid = maXColorCount.red >= currentColorCount.red;
  const isGreenValid = maXColorCount.green >= currentColorCount.green;
  const isBlueValid = maXColorCount.blue >= currentColorCount.blue;

  return isRedValid && isGreenValid && isBlueValid;
};

const getGameColorCount = (gameSet: string) => {
  const colorCountArray = gameSet.trim().split(","); // ['8 green', '6 blue', '20 red']
  const currentColorCount = {
    red: 0,
    green: 0,
    blue: 0,
  };

  colorCountArray.forEach((colorCount) => {
    const [count, color] = colorCount.trim().split(" ");
    if (color === Color.Red) {
      currentColorCount.red += parseInt(count);
    }
    if (color === Color.Green) {
      currentColorCount.green += parseInt(count);
    }
    if (color === Color.Blue) {
      currentColorCount.blue += parseInt(count);
    }
  });

  return currentColorCount;
};

const getGamePowerSet = (gameSets) => {
  const colorCountArray = gameSets.map((gameSet) => getGameColorCount(gameSet));
  const maxColorCount = {
    red: 0,
    green: 0,
    blue: 0,
  };
  colorCountArray.forEach((colorCount) => {
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

  const { red, green, blue } = maxColorCount;

  return Number(red) * Number(green) * Number(blue);
};

export {
  getGameId,
  getGameSetsFromLine,
  isValidGame,
  getGameColorCount,
  getGamePowerSet,
};
