var selectElementsStartingWithA = function(array) {
  var length = array.length;
  var finalArray = [];
  for (var i = 0; i < length; i++){
    if (array[i].charAt(0).toLowerCase() === "a"){
      finalArray.push(array[i]);
    }
  };
  return finalArray;
}
