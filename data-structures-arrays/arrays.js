// Demonstrate common array methods.

const array = [1, 2, 3, 4, 5];

// Add an element to the end of the array.
// Returns the length of the array.
console.log(array.push(6));
console.log(array);

// Remove an element from the end of the array.
// Returns the removed element.
console.log(array.pop());
console.log(array);

// Add an element to the start of the array.
// Returns the length of the array.
console.log(array.unshift(10));
console.log(array);

// Remove an element from the start of the array.
// Returns the removed element.
console.log(array.shift());
console.log(array);

// Remove an item from any index.
// splice() takes three arguments -> index from which to start deletion, number of elements to be deleted,
//                          elements to be added after deletion.
// Returns an array of deleted elements.
console.log(array.splice(2, 2));
console.log(array);

// Insert an item at any index.
// splice() takes three arguments -> index from which to start deletion, number of elements to be deleted,
//                          elements to be added after deletion.
// Returns an array of deleted elements.
console.log(array.splice(2, 0, 69, 99));
console.log(array);

// Reverse an array.
// Returns the reversed array.
console.log(array.reverse());
console.log(array);

// Get a portion of an array.
// slice() -> Takes the index for the portion of the array.
// Returns a shallow copy of a portion of an array.
// DOES NOT MODIFY THE ARRAY.
console.log(array.slice(2,4));
console.log(array);

// Merge two arrays.
// concat() does not change the existing arrays, but instead returns a new array.
// DOES NOT MODIFY THE ARRAY.
console.log(array.concat(['a', 'b', 'c']));
console.log(array)