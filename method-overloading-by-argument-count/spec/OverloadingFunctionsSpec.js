describe("addMethod", function(){
  var addMethod = require("../lib/addMethod.js");
  var object;

  beforeEach(function(){
    object = {};
  });

  it("creates method for object with 1 argument", function(){
    addMethod(object, "functionName", function(){ return 1 });
    expect(object.functionName()).toEqual(1);
  });

  it("creates a method for object with different nubmer of arguments", function(){
    addMethod(object, "functionName", function(a, b){ return 2 });
    expect(object.functionName(2, 4)).toEqual(2);
  });

  it("only the correct number of arguments will return each function", function(){
    addMethod(object, "functionName", function(){ return 1 });
    addMethod(object, "functionName", function(a, b){ return 2 });
    addMethod(object, "functionName", function(a, b, c){ return 3 });
    expect(object.functionName()).toEqual(1);
    expect(object.functionName(2, 4)).toEqual(2);
    expect(object.functionName(6, 4, 4)).toEqual(3);
  });
});
