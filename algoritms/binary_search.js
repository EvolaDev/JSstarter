// O(log n)
'use strict';
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const iterateBinarySearch = (array, searchedValue) => {
    let minIndex = 0,
        maxIndex = array.length - 1;
    // [0, 1] ==> [-1, 0] ==> all elements of array is checked
    while (minIndex <= maxIndex) {
        const midIndex = Math.round((minIndex + maxIndex) / 2),
            midValue = array[midIndex];

        if (midValue === searchedValue) return midIndex;
        if (searchedValue < midValue) {
            maxIndex = midIndex - 1;
        }
        if (searchedValue > midValue) {
            minIndex = midIndex + 1;
        }
    }
    return null;
};

const recursiveBinarySearch = (array, searchedValue, min, max) => {
    const tArray = array.slice();
    if (min === undefined) min = 0;
    if (max === undefined) max = array.length - 1;

    const mid = Math.floor((max - min) / 2 + min);
    if (max <= min && tArray[mid] !== searchedValue) return null;
    if (tArray[mid] === searchedValue) return mid;
    if (tArray[mid] < searchedValue) return recursiveBinarySearch(tArray, searchedValue, mid + 1, max);
    return recursiveBinarySearch(tArray, searchedValue, min, mid - 1);
};

module.exports = { sortedArray, iterateBinarySearch, recursiveBinarySearch };
