// O(n log n) -> average complexity (if using random value or median as pivot)
const unsortedArray = [3, 1, 2, 7, 41, 5, 6];

const quickSort = array => {
    if (array.length < 2) return array;
    const pivot = Math.floor(Math.random() * array.length);
    const less = array.filter(item => item < pivot);
    const greater = array.filter(item => item > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
};
