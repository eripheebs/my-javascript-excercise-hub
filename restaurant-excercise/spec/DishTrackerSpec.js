describe("DishTracker", function(){
  var DishTracker = require("../lib/DishTracker.js");
  var dishTracker, dish, dishes;

  beforeEach(function(){
    dishTracker = Object.create(DishTracker);
    dishTracker.init();
    dish = jasmine.createSpy("Dish");
    dishes = [dish, dish];
  });

  it("can be initialised without dishes", function(){
    expect(dishTracker.dishes).toEqual([]);
  });

  it("can add dishes to the dishTracker", function(){
    dishTracker.addDishes(dishes);
    expect(dishTracker.dishes).toEqual(dishes);
  });

  it("can delete dishes off the dishTracker (so 3 of them will be deleted in this case)", function(){
    dishTracker.addDishes(dishes);
    var dish2 = jasmine.createSpy('Dish 2');
    var dish3 = jasmine.createSpy('Dish 3');
    var dishes2 = [dish2, dish3];
    dishTracker.addDishes(dishes2);
    dishTracker.deleteDishes([dish, dish3]);
    expect(dishTracker.dishes).not.toContain(dish);
    expect(dishTracker.dishes).not.toContain(dish3);
  });

  it("returns dishes as a method", function(){
    expect(dishTracker.getDishes()).toEqual([]);
  });
});
