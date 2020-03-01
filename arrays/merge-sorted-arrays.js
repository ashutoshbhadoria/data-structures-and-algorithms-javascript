function mergeSortedArray(array1, array2) {
  if (!array1 || !array2) {
    throw { error: 'Invalid arguments' };
  }

  if (array1.length < 0) {
    return array2;
  }

  if (array2.length < 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  let array1Index = 1;
  let array2Index = 1;
  const mergedArray = [];

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[array1Index];
      array1Index++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[array2Index];
      array2Index++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArray([0, 3, 4, 15], [3, 4, 6, 14, 30, 30]));