import { indexOf2d } from "../util.js";

const Direction = { UP: 0, DOWN: 1, LEFT: 2, RIGHT: 3 };

function nextMove(arr, epsilon, agent, matrix) {
  let rand = Math.random();
  if (rand < epsilon) {
    return randomLegalMove(agent, matrix);
  } else {
    return argMax(arr);
  }
}

function checkStop(agent, matrix) {
  let end = indexOf2d(matrix, 3);
  if (agent.x === end[0] && agent.y === end[1]) {
    return true;
  } else {
    return false;
  }
}

function randomLegalMove(agent, matrix) {
  const { x, y } = agent;
  const up = x > 0 ? matrix[x - 1][y] : undefined;
  const down = x < matrix.length ? matrix[x + 1][y] : undefined;
  const left = y > 0 ? matrix[x][y - 1] : undefined;
  const right = y < matrix.length ? matrix[x][y + 1] : undefined;

  let legalArr = [];
  if (up !== undefined && up !== 0) {
    legalArr.push(Direction.UP);
  }

  if (down !== undefined && down !== 0) {
    legalArr.push(Direction.DOWN);
  }

  if (left !== undefined && left !== 0) {
    legalArr.push(Direction.LEFT);
  }

  if (right !== undefined && right !== 0) {
    legalArr.push(Direction.RIGHT);
  }

  return legalArr[Math.floor(Math.random() * legalArr.length)];
}

function argMax(arr) {
  console.log(arr);

  // Find max
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Look for all max indexes
  let maxIndexes = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === max) {
      maxIndexes.push(j);
    }
  }

  // Pick index at random
  return maxIndexes[Math.floor(Math.random() * maxIndexes.length)];
}

export { Direction, checkStop, nextMove };
