const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage used.
// JavaScript arrays are by dynamic arrays.

console.log(strings[2]);

// Insert at the end - push.
strings.push('e'); // O(1)
console.log(strings);
// Push/Append can be O(n) because these are dynamic arrays.

// Delete from end - pop.
strings.pop(); // O(1)
console.log(strings);

// Insert at the beginning - unshift.
strings.unshift('x'); // O(n)
console.log(strings);

// Insert in the middle
strings.splice(2, 0, 'alien'); // O(n)
console.log(strings);

// Delete from middle
strings.splice(2, 1); // O(n)
console.log(strings);
