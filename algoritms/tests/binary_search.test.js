const binarySearch = require('../binary_search');

describe('Tests for binary search', () => {
    console.log('binary search test starts');
    test('index of 1 is 0', () => {
        expect(binarySearch.iterateBinarySearch(binarySearch.sortedArray, 1)).toBe(0);
        expect(binarySearch.recursiveBinarySearch(binarySearch.sortedArray, 1)).toBe(0);
    });

    test('index of 10 is 9', () => {
        expect(binarySearch.iterateBinarySearch(binarySearch.sortedArray, 10)).toBe(9);
        expect(binarySearch.recursiveBinarySearch(binarySearch.sortedArray, 10)).toBe(9);
    });

    test('index of 5 is 4', () => {
        expect(binarySearch.iterateBinarySearch(binarySearch.sortedArray, 5)).toBe(4);
        expect(binarySearch.recursiveBinarySearch(binarySearch.sortedArray, 5)).toBe(4);
    });
});
