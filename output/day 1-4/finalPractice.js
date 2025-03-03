// 1️⃣ Find the Second Largest and Second-Smallest Element in an Array.
function secondSmallestAndSecondLargest(array) {
    let max = -Infinity;
    let sMax = -Infinity + 1;
    let min = Infinity;
    let sMin = Infinity - 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            sMax = max;
            max = array[i];
        }
        else if (array[i] > sMax) {
            sMax = array[i];
        }
        if (array[i] < min) {
            sMin = min;
            min = array[i];
        }
        else if (array[i] < sMin) {
            sMin = array[i];
        }
    }
    return [sMax, sMin];
}
// console.log(secondSmallestAndSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// 2️⃣ Find the Equilibrium Index of an Array (Index where Left Sum = Right Sum).
function equilibriumIndex(array) {
    let leftSum = 0;
    let totalSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    for (let i = 0; i < array.length; i++) {
        totalSum -= array[i];
        leftSum += array[i];
        if (leftSum === totalSum) {
            return true;
        }
    }
    return false;
}
// console.log(equilibriumIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// 3️⃣ Find the Maximum Product of Two Elements in an Array.
function maximProductOfTwoIndex(array) {
    let maxProduct = -Infinity;
    for (let i = 0; i < array.length - 1; i++) {
        const product = array[i] * array[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}
// console.log(maximProductOfTwoIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// 4️⃣ Find the Most Frequent Element in an Array.
function mostFrequentElement(array) {
    const map = {};
    let maxCount = 0;
    let key;
    for (let i = 0; i < array.length; i++) {
        map[array[i]] = (map[array[i]] || 0) + 1;
    }
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] > maxCount) {
            maxCount = map[array[i]];
            key = array[i];
        }
    }
    return [key, maxCount];
}
// console.log(mostFrequentElement([1, 2, 3, 4,2,3,4,1,2,3,1,2,3,4,4,2,3,3,2,3,3]))
// 7️⃣ Find Two Numbers in a Sorted Array That Sum to K.
// @ts-ignore
function twoSum(array, k) {
    const map = {};
    for (let i = 0; i < array.length; i++) {
        map[array[i]] = (map[array[i]] || 0) + 1;
    }
    for (let i = 0; i < array.length; i++) {
        if (map[array[i] - k]) {
            return true;
        }
    }
    return false;
}
// 8️⃣ Find the Closest Pair to a Target Sum in a Sorted Array.
function twoSumClosest(array, k) {
    // Half-baked Question Given I dont have any conditions to work with so please work with this
    const map = {};
    let closest = Infinity;
    let ans = [];
    for (let i = 0; i < array.length; i++) {
        map[array[i]] = (map[array[i]] || 0) + 1;
        closest = Math.min(Math.abs(array[i] - k), Math.abs(closest));
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] <= closest && array[i] >= closest) {
            if (array[i] >= closest)
                ans = [array[i], k - closest];
            if (array[i - 1] <= closest)
                ans = [array[i - 1], k - closest];
        }
    }
    return ans.length > 0 ? ans : "Sum Not Possible";
}
// console.log(twoSumClosest([2,4,2,6,7,8],4))
// 9️⃣ Find the Squared Sorted Array (Sort Squared Elements Efficiently).
// @ts-ignore
function squaredSortedArray(array) {
    if (array[0] >= 0) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] * array[i];
        }
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }
    let tempArray = new Array(array.length);
    let i = 0, j = array.length - 1, k = array.length - 1;
    while (i <= j) {
        if (array[i] > array[j]) {
            tempArray[k] = array[i];
            i++;
        }
        else {
            tempArray[k] = array[j];
            j--;
        }
        k--;
    }
    return tempArray;
}
// console.log(squaredSortedArray([-4, -2, 0, 1, 3]))
// 🔟 Find the Maximum Sum of a Subarray of Size K.
function maxSumOfSizeK(array, k) {
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        sum += array[i];
        maxSum = Math.max(sum, maxSum);
    }
    for (let i = k, j = 0; i < array.length; i++, j++) {
        sum -= array[j];
        sum += array[i];
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}
// console.log(maxSumOfSizeK([4, 2, 1, 7, 8, 1, 2, 8, 10],3))
// 1️⃣1️⃣ Find the First Negative Number in Each Window of Size K.
function negativeNumberInEachWindow(array, k) {
    const negativeArray = [];
    const ansArray = [];
    for (let i = 0; i < k; i++) {
        if (array[i] < 0) {
            negativeArray.push(array[i]);
        }
    }
    if (negativeArray[0] !== undefined) {
        ansArray.push(negativeArray[0]);
    }
    else {
        ansArray.push(0);
    }
    for (let i = k; i < array.length; i++) {
        if (array[i - k] === negativeArray[0]) {
            negativeArray.shift();
        }
        if (array[i] < 0) {
            negativeArray.push(array[i]);
        }
        if (negativeArray[0] !== undefined) {
            ansArray.push(negativeArray[0]);
        }
        else {
            ansArray.push(0);
        }
    }
    return ansArray;
}
// console.log(negativeNumberInEachWindow([2, -1, 3, -4, 5, 6, -7, 8, 9],3))
// 1️⃣2️⃣ Find the Smallest Subarray with Sum ≥ K.
function smallestSubArray(array, k) {
    let minLength = Infinity, sum = 0, left = 0;
    for (let right = 0; right < array.length; right++) {
        sum += array[right];
        while (sum >= k) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= array[left];
            left++;
        }
    }
    return minLength;
}
// console.log(smallestSubArray([1, 4, 45, 6, 0, 19],53))
// 1️⃣3️⃣ Find the Longest Subarray with Sum ≤ K.
function maxSubArrayLessThenK(array, k) {
    let minLength = 0, sum = 0, left = 0;
    for (let right = 0; right < array.length; right++) {
        sum += array[right];
        if (sum <= k)
            minLength = Math.max(minLength, right - left + 1);
        while (sum >= k) {
            sum -= array[left];
            left++;
        }
    }
    return minLength;
}
// console.log(maxSubArrayLessThenK([1, 2, 3, 4, 5],11))
// 1️⃣4️⃣ Find the Longest Substring Without Repeating Characters (Sliding Window + HashMap).
function longestSubStringWithoutRepeatingCharacters(string) {
    let length = 0;
    let maxLength = 0;
    const map = {};
    for (let i = 0, j = 0; i < string.length; i++) {
        if (map[string[i]]) {
            maxLength = Math.max(length, maxLength);
            while (map[string[i]] > 1) {
                delete map[string[j]];
                j++;
                length--;
            }
        }
        else {
            length++;
            map[string[i]] = (map[string[i]] || 0) + 1;
        }
    }
    return maxLength;
}
// console.log(longestSubStringWithoutRepeatingCharacters('asbasbfdaaahjklmnbvcx'))
// 1️⃣5️⃣ Find the Longest Subarray with Equal 0s and 1s (Sliding Window + HashMap).
// I will explain this see first we loop through the array and count the occurrences
// in the map and then when we encounter a new number we encounter a non 1 or 0 we reset the count
// and check with max count and store max and then return the max count, and we also reset or delete 1 and 0 from map
