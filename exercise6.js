function angkaPalindrome(num) {
  // you can only write your code here!
  function palindrome(nomor){
    reverse = 0;
    while(nomor>0){
      let right = Math.floor(nomor%10);
      reverse = reverse * 10 + right;
      nomor = Math.floor(nomor/10);
    }
    return reverse;
  }

  var display = [];

  //Checking for the palindrome
  for (i=0; i<100; i++){
    if (num === palindrome(num)){
        display = num;
        break;
    }
    else{
        num ++;
    }
  }
  if (display < 10){
      display +=1;
  }
  return display;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001