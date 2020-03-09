function factorialRecursive(number) {
  if (number == 1 || number == 0) {
    return 1;
  }
  return number * factorialRecursive(number - 1);
}

function factorialIterative(number) {
  if (number == 1 || number == 0) {
    return 1;
  }
  let result = 1;
  for(let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

// test

console.log(factorialRecursive(5));
console.log(factorialRecursive(6));
console.log(factorialRecursive(1));
console.log(factorialRecursive(0));

console.log(factorialIterative(5));
console.log(factorialIterative(6));
console.log(factorialIterative(1));
console.log(factorialIterative(0));