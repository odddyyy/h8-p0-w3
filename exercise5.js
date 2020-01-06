function palindrome(kata) {
  // you can only write your code here!
  var reverse = [];
  for (i=kata.length-1; i>=0; i--){
      reverse += kata[i];
  }
  if(kata === reverse){
      return true;
  }
  else{
      return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false