function groupAnimals(animals) {
  // you can only write your code here!
  var sortedAnimals = animals;
  
  //sorting array
  for (i=0;i<sortedAnimals.length;i++){
    for (j=0;j<sortedAnimals.length;j++){
      if (sortedAnimals[i] < sortedAnimals[j] && i != j){
        let temp = sortedAnimals [i];
        sortedAnimals[i] = sortedAnimals [j];
        animals[j] = temp;
      }
    }
  }
  
  //grouping animals with same first character
  var display = [];
  var firstChar = sortedAnimals[0][0];
  var temp = [];
  for (i=0;i<sortedAnimals.length;i++){
    if(animals[i][0] == firstChar){
      temp.push(sortedAnimals[i]);
    }
    else{
      display.push(temp);
      temp = [];
      firstChar = animals[i][0];
      temp.push(sortedAnimals[i]);
    }
    if (i === sortedAnimals.length-1){
      display.push(temp);
    }
  }

  return display;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]