describe("DishTracker", function(){
  var DishTracker = require("../lib/DishTracker.js");
  var dishTracker;

  beforeEach(function(){
    dishTracker = Object.create(DishTracker);
    dishTracker.init();
    dish = jasmine.createSpy("Dish");
    dishs = [dish, dish];
  });

  it("can be initialised without dishs", function(){
    expect(dishTracker.dishes).toEqual([]);
  });

  it("can add dishs to the dishTracker", function(){
    dishTracker.addDishes(dishs);
    expect(dishTracker.dishes).toEqual(dishs);
  });

  it("can delete dishs off the dishTracker (so 3 of them will be deleted in this case)", function(){
    dishTracker.addDishes(dishs);
    dish2 = jasmine.createSpy('Dish 2');
    dish3 = jasmine.createSpy('Dish 3');
    dishs2 = [dish2, dish3];
    dishTracker.addDishes(dishs2);
    dishTracker.deleteDish([dish, dish3]);
    expect(dishTracker.dishs).not.toContain(dish);
    expect(dishTracker.dishs).not.toContain(dish3);
  });
});
