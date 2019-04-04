describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array of one', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('sorts an array of two elements', function() {
    expect(bubbleSort([4, 2])).toEqual([2, 4]);
  });
  it('can sort any amount of elements', function() {
    expect(bubbleSort([2, 1, 4, 5, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('can handle same numbers', function() {
    expect(bubbleSort([1, 4, 4, 2, 7, 3, 3])).toEqual([1, 2, 3, 3, 4, 4, 7]);
  });

  const testArr = [4, 2];
  const testArr2 = [4, 2, 1];

  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('call count should be 1', function() {
    window.bubbleSort(testArr);
    expect(window.swap.calls.count()).toEqual(1);
  });
  it('call count should be 3', function() {
    window.bubbleSort(testArr2);
    expect(window.swap.calls.count()).toEqual(3);
  });
});
