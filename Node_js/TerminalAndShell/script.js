function printPrimes(start, end) {
    for (let i = start; i <= end; i++) {
        let isPrime = true;

        if (i < 2) continue; // Skip numbers less than 2

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

// Example usage
printPrimes(3, 10);