require('./lib/DishTracker.js');
require('./lib/Dish.js');
require('./lib/Calculator.js');

var spaghetti = Object.create(Dish);
spaghetti.init({name: "Spaghetti Bolognese", price: 6});

var meat = Object.create(Dish);
spaghetti.init({name: "Steak with chips", price: 10});

var menu = Object.create(DishTracker);
menu.init([meat, spaghetti]);

var order = Object.create(DishTracker);
order.init();
order.addDishes([spaghetti, spaghetti]);
order.addDishes(spaghetti);
order.dishes;

getPrice: function(){
  return this.price;
}

var calculator = Object.create(Calculator);
calculator.addArrayItems(order.dishes, getPrice);

// Dish tracker can also be used to track stock in restaurant
var stock = Object.create(DishTracker);
stock.init();
for(var i=0; i < 10; i++){
  stock.addDishes([spaghetti, meat])
}
