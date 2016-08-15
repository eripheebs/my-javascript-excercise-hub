var Menu = {
  init: function(items){
    this.items = [].concat.apply([], items)
  }
};

module.exports = Menu;
