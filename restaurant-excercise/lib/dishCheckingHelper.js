var containsItem = function(hashOfArgs){
  var item = hashOfArgs["item"];
  var list = hashOfArgs["list"];
  var getArrayMethod = hashOfArgs["getArrayMethod"];
  _applyMethod(getArrayMethod, list).forEach(function(thing){
    if (thing.name == thing.name) return true
  });
  return false;
};

var _applyMethod = function(method, item){
  return method.apply(item)
};

module.exports = containsItem;
