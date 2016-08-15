require('./polyfills/includes.js')

var Menu = {
  init: function(items){
    this.items = [].concat.apply([], items)
  },
  addItems: function(items){
    this.items = [].concat.apply(this.items, items)
  },
  deleteItem: function(items){
    var self = this;
    var checkIfIncluded = function(item){
      return items.includes(item);
    }

    var thereIsStillItemIncluded = function(){
      return !(count == self.items.length)
    }

    var count = 0;
    self.items.forEach(function(item, index){
      checkIfIncluded(item) ? self.items.splice(index, 1) : count++
    });

    if (thereIsStillItemIncluded()) {
      self.deleteItem(items)
    };
  }
};

module.exports = Menu;
