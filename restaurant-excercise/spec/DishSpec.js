describe("Dish", function(){
  var Dish = require("../lib/Dish.js");
  var dish;

  beforeEach(function(){
    dish = Object.create(Dish);
    hashOfArgs = {name: "Fried Chicken", price: 3};
    dish.init(hashOfArgs);
  });

  it("should be able to be initialised with name and price", function(){
    expect(dish.name).toEqual("Fried Chicken");
    expect(dish.price).toEqual(3);
  });
});
