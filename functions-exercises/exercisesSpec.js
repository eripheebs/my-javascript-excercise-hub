'use strict';

describe('javascriptExcercises', function(){

  it('selects elements starting with A', function(){
    var result = selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);
    expect(result).toEqual(['apples', 'avocados']);
  });

});
