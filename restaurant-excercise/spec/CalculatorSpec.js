describe("Calculator", function(){
  var Calculator = require("../lib/Calculator.js");
  var calculator, dish, array;

  beforeEach(function(){
    calculator = Object.create(Calculator);
    Dish = {
      init: function(){
        this.price = 3
      }
    };
    dish = Object.create(Dish);
    dish.init();
    array = [dish, dish, dish]
  });

  it("should be able to add together items of an array", function(){
    var getPrice = function(){
      return this.price;
    };
    expect(calculator.addArrayItems(array, getPrice)).toEqual(9);
  });
});
