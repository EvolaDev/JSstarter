const selectionObj = require('../selection_sort');

describe('test for selection sort', () => {
    console.log('tests for selection sort is starting');
    test('[2, 3, 1, 4, 6, 5, 9, 7, 8] => [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        expect(selectionObj.selectionSort(selectionObj.unsortedArray)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
