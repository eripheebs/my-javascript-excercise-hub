'use strict';

describe('javascriptExcercises', function(){

  it('selects elements starting with A', function(){
    var result = selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);
    expect(result).toEqual(['apples', 'avocados']);
  });

  it('removes null values from an array', function(){
    var result = removeNullElements(['a', 'b', null, null, false, 0]);
    expect(result).toEqual(['a', 'b', false, 0]);
  });

});
