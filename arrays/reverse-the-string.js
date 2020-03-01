function reverse(string) {
  stringArray = string.split('');
  let reverseString = '';
  for(let i = stringArray.length - 1; i >= 0; i--) {
    reverseString += stringArray[i];
  }

  return reverseString;
}

console.log(reverse('Hello!'));