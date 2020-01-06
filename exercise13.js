function targetTerdekat(arr) {
  // you can only write your code here!
  var o = [];
  var x = [];

  for(i=0;i<arr.length;i++){
    if (arr[i] === `x`){
      x.push(i);
    }
    else if (arr[i] === `o`){
      o.push(i);
    }
  }

  if(x.length === 0){
    return 0;
  }
  else{
    if(x[0] < o[0]){
      return (o[0] - x[x.length-1]);
    }
    else{
      return (x[0] - o[o.length-1]);
    }
  }
 
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2