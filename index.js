function findMinAndRemoveSorted(array) {
  let min = array[0];
  array.shift();
  return min;
}

function merge (a1, a2) {
  let sorted = []
  while (a1.length !== 0 && a2.length !==0) {
    if (a1[0] < a2[0]) {
      sorted.push(findMinAndRemoveSorted(a1))
      console.log(a1)
    } else {
      sorted.push(findMinAndRemoveSorted(a1))
    }
  }
  return sorted.concat(a1).concat(a2)
}