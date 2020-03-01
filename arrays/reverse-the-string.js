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

// shorter version
function reverse1(string) {
  return string.split('').reverse().join('');
}

//es6
const reverse2 = string => [...string].reverse().join('')

// Test
console.log(reverse('Hello there! General Kenobi'));
console.log(reverse1('Hello there! General Kenobi'));
console.log(reverse2('Hello there! General Kenobi'));

