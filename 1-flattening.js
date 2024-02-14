let arrays = [[1, 2, 3], [4, 5], [6]];
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = (current, element);
    }
    return current;
  }
  
  console.log(reduce(["1, 2, 3, 4, 5, 6"]));


// → [1, 2, 3, 4, 5, 6]