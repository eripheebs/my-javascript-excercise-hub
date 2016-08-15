require('./lib/DishTracker.js');
require('./lib/Dish.js');

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
