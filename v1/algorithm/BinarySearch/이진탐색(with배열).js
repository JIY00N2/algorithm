const array = [1, 2, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === findValue) {
      return mid;
    } else if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, 2876)); // 7
console.log(binarySearch(array, 1)); // 0
console.log(binarySearch(array, 1004)); // 6
console.log(binarySearch(array, 500)); // -1
