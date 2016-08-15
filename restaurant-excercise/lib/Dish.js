var Dish = {
  init: function(hashOfArgs){
    this.name = hashOfArgs["name"];
    this.price = hashOfArgs["price"];
  },
  getPrice: function(){
    return this.price;
  }
};

module.exports = Dish;
