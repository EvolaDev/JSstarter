// O(log n)
'use strict';
const sortedArray = [1,2,3,4,5,6,7,8,10]

@log
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
}

@log 
const recursiveBinarySearch = (array, target, min, max) => {
	const tArray = array.slice();
	if (min === undefined) min = 0;
	if (max === undefined) max = array.length - 1;

	let guess = Math.floor(((max - min) / 2) + min);
	if (max <= min && tArray[guess] !== target) return null;
	if (tArray[guess] === target) return guess;
	if (tArray[guess] < target) return recursiveBinarySearch(tArray, target, guess + 1, max);
	return recursiveBinarySearch(tArray, target, min, guess - 1);
};
