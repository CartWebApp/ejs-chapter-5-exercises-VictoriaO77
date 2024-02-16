let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array){
  return array.reduce((flat, current) => flat.concat(current), []);
}

console.log(flatten([[1,2,3],[4,5],[6]]));

// → [1, 2, 3, 4, 5, 6]