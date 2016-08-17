var addMethod = function(object, functionName, func){
  var prevFunction = object[functionName];
  console.log(object[functionName]);
  object[functionName] = function(){
    if (func.length == arguments.length) {
      return func.apply(this, arguments);
    } else if (typeof prevFunction == "function") {
      return prevFunction.apply(this, arguments);
    }
  };
};

module.exports = addMethod;
