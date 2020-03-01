function reverse(string) {
  if (!string) {
    throw { error: 'Invalid argument' };
  }

  const backwards = [];
  for (let i = string.length - 1; i >= 0; i--) {
    backwards.push(string[i]);
  }

  return backwards.join('');
}

// Test
console.log(reverse('Hello there! General Kenobi'));
