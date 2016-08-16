require('./polyfills/includes.js')

var DishTracker = {
  init: function(items){
    this.dishes = [].concat.apply([], items)
  },
  addDishes: function(items){
    this.dishes = [].concat.apply(this.dishes, items)
  },
  deleteDishes: function(items){
    var self = this;
    var checkIfIncluded = function(item){
      return items.includes(item);
    }

    var thereIsStillDishIncluded = function(){
      return !(count == self.dishes.length)
    }

    var count = 0;
    self.dishes.forEach(function(item, index){
      checkIfIncluded(item) ? self.dishes.splice(index, 1) : count++
    });

    if (thereIsStillDishIncluded()) {
      self.deleteDishes(items)
    };
  },
  getDishes: function(){
    return this.dishes
  }
};

module.exports = DishTracker;
