function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var condition = true;
  var selisih = arr[1] - arr[0];
  for (i = 0; i < arr.length - 1 && condition === true; i++) {
    if (selisih !== arr[i+1] - arr[i]) {
      condition = false;
    }
  }
  return condition;

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false