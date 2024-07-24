const startTime = performance.now();

for (let a = 0; a < 100; a++) {
  countPrimeNumbers();
}
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(
  `Execution time of printing countPrimeNumbers was ${executionTime} milliseconds`
);
