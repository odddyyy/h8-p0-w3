function groupAnimals(animals) {
  // you can only write your code here!
  var firstChar = [];
  var binatang = [];
  var display = [];
  
  for (i=0;i<animals.length;i++){
    firstChar = animals[i][0]; //storing first character of the given array
    binatang = animals[i]; //assigning that first character animal to binatang
    var temp = []; // resetting value of temp to empty
    for (j=animals.length-1;j>i;j--){
      if (firstChar === animals[j][0]){
        binatang += `, ` + animals[j]; //adding the matching first character of animal array
        animals.splice(j,1); //removing that matching animal so it wont be repeated in the loop
        
      }
      
    }
    temp.push(binatang);
    display.push(temp);
    
  }
  
  //sorting the array alphabetically
  for (i=0;i<display.length;i++){
    if (display[i] > display[i+1]){
      let temp = display[i];
      display[i] = display [i+1];
      display [i+1] = temp;
    }
  }
  return display;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]