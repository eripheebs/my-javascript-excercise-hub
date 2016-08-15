describe("Menu", function(){
  var Menu = require('../lib/Menu.js');
  var menu;

  beforeEach(function(){
    menu = Object.create(Menu);
    menu.init();
  });

  it("can be initialised without items", function(){
    expect(menu.items).toEqual([]);
  })
});
