var Calculator = {
  addArrayItems: function addItems(array, valueIdentifier){
    return 0 + ( (array.length > 1) ? valueIdentifier.apply(array[array.length-1]) + addItems(array.slice(0, array.length-1), valueIdentifier) : valueIdentifier.apply(array[0]) );
  }
};

module.exports = Calculator;
