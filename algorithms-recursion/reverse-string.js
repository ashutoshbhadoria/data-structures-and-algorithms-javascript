// Reverse a string recursively using array manipulation.
function reverseStringRecusrsiveOne(string) {
  const stringArray = string.split('');
  const reverseResultArray = [];

  function addToArray(array) {
    if (array.length <= 0) {
      return;
    }
    reverseResultArray.push(stringArray.pop());
    addToArray(stringArray);
  }

  addToArray(stringArray);
  return reverseResultArray.join('');
}

// Reverse a string recursively using string methods.
function reverseStringRecusrsiveTwo(string) {
  if (string === '') {
    return '';
  }
  return (
    reverseStringRecusrsiveTwo(string.substring(1)) + string.charAt(0)
  );
}

// Test
console.log(reverseStringRecusrsiveOne('Hello!'));
console.log(reverseStringRecusrsiveTwo('Hello!'));
