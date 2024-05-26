import React, { useState, useEffect } from "react";

export function PrimeNumbers() {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [lastPrime, setLastPrime] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      let prime = lastPrime + 1;
      while (!isPrime(prime)) {
        prime++;
      }
      setPrimeNumbers((primes) => [...primeNumbers, prime]);
      setLastPrime(prime);
    }, 1000);
    return () => clearInterval(interval);
  });

  return <span>{primeNumbers.join(", ")}</span>;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
