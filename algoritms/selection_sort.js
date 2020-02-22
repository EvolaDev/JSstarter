//O(n^2)
const unsortedArray = [2, 3, 1, 4, 6, 5, 9, 7, 8];

const selectionSort = unsortedArray => {
    const array = unsortedArray.slice();
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = min + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (array[i] === array[min]) continue;
        const dummy = array[i];
        array[i] = array[min];
        array[min] = dummy;
    }
    return array;
};

module.exports = { unsortedArray, selectionSort };
