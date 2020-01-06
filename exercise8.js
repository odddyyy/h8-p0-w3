function pasanganTerbesar(num) {
  // you can only write your code here!
  let strNum = num.toString();
  var newNum = [];
  var display = [];
  for (i=0;i<strNum.length-1;i++){
      newNum.push(strNum[i]+strNum[i+1]);
  }
  newNum.sort();
  display = Number(newNum[newNum.length-1]);
  return display;
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99