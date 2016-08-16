describe("List (Dish) Checking Method", function(){
  var containsItem = require("../lib/dishCheckingMethod.js");
  var dishTracker, dishTracker2, dish, dish2;

  beforeEach(function(){
    dish = jasmine.createSpy("Dish");
    dish2 = jasmine.createSpy("Dish");
    dishTracker = {
      getDishes: function(){}
    };
    spyOn(dishTracker, ["getDishes"]).and.returnValue([dish, dish2]);
  });

  it("checks if there is still stock", function(){
    expect(containsItem({item: dish, list: dishTracker, getArrayMethod: dishTracker.getDishes}));
  });

});
