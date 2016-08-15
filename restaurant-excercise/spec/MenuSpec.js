describe("Menu", function(){
  var Menu = require("../lib/Menu.js");
  var menu;

  beforeEach(function(){
    menu = Object.create(Menu);
    menu.init();
    dish = jasmine.createSpy("Dish");
    dishs = [dish, dish];
  });

  it("can be initialised without dishs", function(){
    expect(menu.dishes).toEqual([]);
  });

  it("can add dishs to the menu", function(){
    menu.addDishes(dishs);
    expect(menu.dishes).toEqual(dishs);
  });

  it("can delete dishs off the menu (so 3 of them will be deleted in this case)", function(){
    menu.addDishes(dishs);
    dish2 = jasmine.createSpy('Dish 2');
    dish3 = jasmine.createSpy('Dish 3');
    dishs2 = [dish2, dish3];
    menu.addDishes(dishs2);
    menu.deleteDish([dish, dish3]);
    expect(menu.dishs).not.toContain(dish);
    expect(menu.dishs).not.toContain(dish3);
  });
});
