function solution(n, costs) {
  let arr = Array.from({ length: n }, (_, i) => i);
  function find(arr, n) {
    if (arr[n] === n) {
      return n;
    } else {
      return (arr[n] = find(arr, arr[n]));
    }
  }
  function union(arr, a, b) {
    a = find(arr, a);
    b = find(arr, b);
    if (a < b) {
      arr[b] = a;
    } else {
      arr[a] = b;
    }
  }
  function isUnion(arr, a, b) {
    a = find(arr, a);
    b = find(arr, b);
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  let cost = 0;
  costs.sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < costs.length; i++) {
    if (!isUnion(arr, costs[i][0], costs[i][1])) {
      cost += costs[i][2];
      union(arr, costs[i][0], costs[i][1]);
    }
  }
  return cost;
}
