// 1️⃣ Find If a Sorted Array Has a Pair That Sums to K
// @ts-ignore
function twoSum (array:number[],k:number): boolean {
    for (let i = 0,j = array.length - 1; i < array.length;) {
        const sum = array[i] + array[j]
        if(sum === k){
            return true
        }else if (sum > k){
            j--
        }else{
            i++
        }
    }
    return false
}
// console.log(twoSum([1, 2, 3, 9, 11],8))
// console.log(twoSum([2, 3, 5, 8, 10],15))

// 2️⃣ Check If a String is a Palindrome (Two Pointers Method)
function isPalindrome (string:string):boolean {
    const s = string.replace(/\W/g, '').toLowerCase()
    const length = s.length/2;
    for (let i = 0,j = s.length-1; i < length; i++,j--) {
        if(s[i]!==s[j]){
            return false
        }
    }
    return true
}
// console.log(isPalindrome('A man, a plan, a canal: Panama'))
// console.log(isPalindrome('hello'))

// 3️⃣ Remove Duplicates from a Sorted Array In-Place
function removeDuplicates (array:number[]):number[] {
    let uniqueElements = array.length - 1;
    for (let i = 0,j = array.length - 1; i < array.length - 1; i++) {
        if(array[i] === array[i + 1]){
            uniqueElements--;
            array[i + 1] = array[j]
            j--;
            i--;
        }
    }
    // use .sort if needed
    return array.slice(0,uniqueElements)
}
// console.log(removeDuplicates([1, 1, 2]))
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// 4️⃣ Move All Negatives to One Side of an Array (Without Extra Space)
function moveNegatives (array:number[]):number[]{
    for (let i = 0,j=array.length-1; i < array.length;) {
        if(array[j] < 0){
            j--
        }else if(array[i] < 0){
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }else{
            i++
        }
    }
    return array
}
// console.log(moveNegatives([1, -2, 3, -4, 5, -6]))

// 5️⃣ Find the Minimum Sum Pair in a Sorted Array
function findMinimumSumPair(array:number[]){
    // Assuming a Sorted array if provided is not
    // Sort the array cause cannot use the two pointers unless sorted
    return [array[0],array[1]]
}

// 6️⃣ Find the Squared Sorted Array (Return Sorted Array of Squares of Elements)
// @ts-ignore
function squaredSortedArray(array:number[]){
    if(array[0] >= 0){
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] * array[i]
        }
        return array
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i]
    }

    let tempArray = new Array(array.length);
    let i = 0, j = array.length - 1, k = array.length - 1;

    while (i <= j) {
        console.log(tempArray)
        if (array[i] > array[j]) {
            tempArray[k] = array[i];
            i++;
        } else {
            tempArray[k] = array[j];
            j--;
        }
        k--;
    }

    return tempArray
}
// console.log(squaredSortedArray([-4, -2, 0, 1, 3]))

// 7️⃣ Find the Closest Pair to a Target Sum in a Sorted Array
function closestPairToSum(array:number[],k:number){
    let difference = 0
    let ans = [0,0]
    for (let i = 0,j = array.length - 1; i < array.length;) {
        const sum = array[i] + array[j]
        if(sum === k){
            return [array[i],array[j]]
        }else if (sum > k){
            j--
        }else{
            const d = sum - k
            if(d < difference) ans = [array[i],array[j]]
            i++
        }
    }
    return ans
}
// console.log(closestPairToSum([-10, -5, -2, 0, 4, 9, 15],6))
// console.log(closestPairToSum([-4, -1, 2, 3, 6, 8],5))

// 9️⃣ Find the Longest Subarray with Absolute Difference ≤ K
// this is as same as above if not this is sliding window which we have not learned yet

// 🔟 Merge Two Sorted Arrays (Without Extra Space, Modify In-Place)
function mergeTwoArraysInPlace(array:number[],array2:number[]) {
    // Assumption arrays will be of same length
    for (let i = 0,j=0; i < array.length,j < array2.length; ) {
        if(array[i] < array2[j]){
            i++
        }else if(array[i] > array2[j]){
            const temp = array[i]
            array[i] = array2[j]
            array2[j] = temp
        }else if(array[i] === undefined){
            j++
            i--
        }
    }
    // Can do an in-place sorting for array2 or use .sort or do [array2.slice(1,-1),array2[0],array2[-1]]
    // Or sort in the else only after the first else if statement and remove that and add i < array.length && j < array2.length in if
    return [array,array2]
}

// console.log(mergeTwoArraysInPlace([1, 3, 5, 7], [2, 4, 6, 8]))
// console.log(mergeTwoArraysInPlace([0, 10, 20, 30], [5, 15, 25, 35]))