

function rangeRight(start, end, step) {
  return range(start, end, step, true);
}

function range(start, end, step = 1, isRight = false) {

  if (end === undefined) {
    end = Math.max(0, start);
    start = Math.min(0, start);
  }

  if (step === 0) {
    const length = Math.max(0, end - start);
    return Array(length).fill(start);
  }

  const result = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }

  return isRight ? result.reverse() : result;
}
console.log(rangeRight(4)); // => [3, 2, 1, 0]
console.log(rangeRight(-4)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 5)); // => [4, 3, 2, 1]
console.log(rangeRight(0, 20, 5)); // => [15, 10, 5, 0]
console.log(rangeRight(0, -4, -1)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 4, 0)); // => [1, 1, 1]
console.log(rangeRight(0)); // => []  