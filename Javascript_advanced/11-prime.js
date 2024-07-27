function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}


function count100() {
  for (let index = 0; index < 100; index++) {
    countPrimeNumbers();
  }
}

const t0 = performance.now();

setTimeout(count100, 0);

const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
