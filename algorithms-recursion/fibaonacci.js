// Retuen the index of the provided number in the fibonacci sequence.

function fibonacci(number) {
  const fibonacci = [0, 1, 1];

  if (number == 0) {
    return 0;
  } else if (number == 1) {
    return [1, 2];
  }

  let index = 3;
  while(fibonacci[index - 1] < number) {
    const myNumber = fibonacci[index - 1] + fibonacci[index - 2];
    
  }
}
