function countPrimeNumbers() {
    const startTime = performance.now();
    let sum = 0;
  for (let i = 2; i <= 100; i++) {
    let dividedNmbr = 0;
    for (let n = 1; n <= i; n++) {
      if (i % n === 0) {
        dividedNmbr++;
      }
    }
    if (dividedNmbr === 2) {
      sum++;
    }
  }
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds`);

  console.log(sum);
}
countPrimeNumbers();

