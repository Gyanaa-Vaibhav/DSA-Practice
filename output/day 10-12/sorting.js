// Bubble Sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j - 1] > array[j]) {
                const temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}
// console.log(bubbleSort([2,4,5,8,22,3,1]))
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = min;
        array[minIndex] = temp;
    }
    return array;
}
// console.log(selectionSort([9,4,2,5,6,1]))
function insertSort(array) {
    let holder = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            let j = holder;
            while (j >= 0 && array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                j--;
            }
        }
        holder++;
    }
    return array;
}
// console.log(insertSort([9,5,3,6,4,2,1,18,29]))
