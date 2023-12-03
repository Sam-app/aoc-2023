const {
  getGameSetsFromLine,
  getGameId,
  isValidGame,
  getGameColorCount,
  getGamePowerSet,
} = require("./utils");

const fs = require("fs");

const getLines = async () => {
  const data = await fs.readFileSync("./input.txt", "utf8");
  const lines = data?.split("\n");
  return lines;
};

const part1 = async () => {
  const lines = await getLines();
  let totalValidGamesIdsSum = 0;

  lines.forEach((line) => {
    const gameId = getGameId(line);

    const gameSets = getGameSetsFromLine(line);

    const hasInvalidGameSet = gameSets.some((gameSet) => {
      const colorCount = getGameColorCount(gameSet);

      return !isValidGame(
        {
          red: 12,
          green: 13,
          blue: 14,
        },
        colorCount
      );
    });

    if (!hasInvalidGameSet) {
      totalValidGamesIdsSum += gameId;
    }
  });

  console.log("Part 1", totalValidGamesIdsSum);
};

const part2 = async () => {
  const lines = await getLines();

  let powerSets = 0;

  lines.forEach((line) => {
    const gameSets = getGameSetsFromLine(line);
    const currentPowerSet = getGamePowerSet(gameSets);
    powerSets += currentPowerSet;
  });

  console.log("Part 2", powerSets);
};

(async () => {
  await part1();
  await part2();
})();
