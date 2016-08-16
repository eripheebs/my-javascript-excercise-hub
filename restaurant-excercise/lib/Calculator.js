var _applyMethod = require("./helpers.js")._applyMethod;

var Calculator = {
  addArrayItems: function addItems(array, getValue){
    return 0 + ( (array.length > 1) ? _applyMethod(getValue, _lastValue(array)) + addItems(_removeLastValue(array), getValue) : _applyMethod(getValue, array[0]) );
  }
};

var _removeLastValue = function(array){
  return array.slice(0, array.length-1)
};

var _lastValue = function(array){
  return array[array.length-1]
};

module.exports = Calculator;
