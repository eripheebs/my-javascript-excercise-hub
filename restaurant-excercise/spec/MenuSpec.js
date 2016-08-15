describe("Menu", function(){
  var Menu = require('../lib/Menu.js');

  beforeEach(function(){
    menu = Object.create(Menu);
    menu.init();
    item = jasmine.createSpy('Item');
    items = [item, item];
  });

  it("can be initialised without items", function(){
    expect(menu.items).toEqual([]);
  })

  it("can add items to the menu", function(){
    menu.addItems(items);
    expect(menu.items).toEqual(items);
  });

  it("can delete items off the menu (so 3 of them will be deleted in this case)", function(){
    menu.addItems(items);
    item2 = jasmine.createSpy('Item 2');
    item3 = jasmine.createSpy('Item 3');
    items2 = [item2, item3];
    menu.addItems(items2);
    menu.deleteItem([item, item3]);
    expect(menu.items).not.toContain(item);
    expect(menu.items).not.toContain(item3);
  });
});
