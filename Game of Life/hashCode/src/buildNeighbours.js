/* eslint-env browser */
const hashKey = require('./hashKey');

function checkKey(coords, neighbours) {
  const hashCode = hashKey(coords);
  (neighbours.has(hashCode)) ? neighbours.get(hashCode).count++ : neighbours.set(hashCode, {
    count: 1, coords });
}

function buildNeighbours(liveCells, neighbours, rows, cols) {
  liveCells.forEach((item) => {
    // find neighbours
    const x = item[0], y = item[1];
    if (x - 1 >= 0 && y - 1 >= 0) {
      checkKey([x - 1, y - 1], neighbours);
    }

    if (x + 1 < rows && y + 1 < cols) {
      checkKey([x + 1, y + 1], neighbours);
    }

    if (x - 1 >= 0 && y + 1 < cols) {
      checkKey([x - 1, y + 1], neighbours);
    }

    if (x + 1 < rows && y - 1 >= 0) {
      checkKey([x + 1, y - 1], neighbours);
    }

    if (y - 1 >= 0) {
      checkKey([x, y - 1], neighbours);
    }

    if (x - 1 >= 0) {
      checkKey([x - 1, y], neighbours);
    }

    if (x + 1 < rows) {
      checkKey([x + 1, y], neighbours);
    }

    if (y + 1 < cols) {
      checkKey([x, y + 1], neighbours);
    }
  });
}

module.exports = buildNeighbours;

/*
const neighbours = new Map();
const liveCells = [[2, 2], [2, 3], [2, 4]];
buildNeighbours(liveCells, neighbours, 6, 6);
console.log(neighbours);
*/
