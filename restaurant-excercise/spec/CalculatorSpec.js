describe("Calculator", function(){
  var Calculator = require("../lib/Calculator.js");
  var calculator, dish, array;

  beforeEach(function(){
    calculator = Object.create(Calculator);
    Dish = {
      init: function(){
        this.price = 3
      },
      getPrice: function(){
        return this.price;
      }
    };
    dish = Object.create(Dish);
    dish.init();
    array = [dish, dish, dish]
  });

  it('should be able to add together items of an array', function(){
    expect(calculator.addArrayItems(array, dish.getPrice)).toEqual(9);
  });
});
