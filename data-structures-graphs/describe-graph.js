/*
Graph to be described is as follows
      2-------0
    /   \
  /       \
  1--------3       

*/

//Edge list.
// List all the nodes as pairs where an edge exists between them.
const graphEdgeList = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];

// Adjacent list.
// List all the nodes which are adjacent to the node equal to index.
const graphAdjacentList = [[2], [2, 3], [1, 3], [1, 2]];

// Adjacent matrix.
// If the index is a neighbor add 1 else 0.
const graphAdjacentMatrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
];
