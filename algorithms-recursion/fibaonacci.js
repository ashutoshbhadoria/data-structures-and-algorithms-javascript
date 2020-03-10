// Return the number in the fibonacci sequence at the index provided.
// Fibonacci sequence -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// O(n)
function fibonacciIterative(index) {
  if (index <= 1) {
    return index;
  }
  let secondPrevious = 0;
  let previous = 1;
  let i = 2;
  let fibNumber;
  while (i <= index) {
    fibNumber = secondPrevious + previous;
    secondPrevious = previous;
    previous = fibNumber;
    i++;
  }
  return fibNumber;
}

// o(2^n)
function fibonacciRecursive(index) {
  if (index <= 1) {
    return index;
  }
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

// test
console.log(fibonacciIterative(6));
console.log(fibonacciIterative(8));
console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1));

console.log(fibonacciRecursive(6));
console.log(fibonacciRecursive(8));
console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
