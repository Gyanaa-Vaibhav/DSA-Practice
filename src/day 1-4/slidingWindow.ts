// 1️⃣ Find the Maximum Sum of a Subarray of Size K (Fixed Window).
// function maxSumOfSizeK(array:number[],k:number):number {
//     let sum = 0;
//     let maxSum = 0;
//
//     for (let i = 0; i < k; i++) {
//         sum += array[i]
//         maxSum = Math.max(sum,maxSum)
//     }
//
//     for (let i = k,j = 0; i < array.length; i++,j++) {
//         sum -= array[j]
//         sum += array[i]
//         maxSum = Math.max(sum,maxSum)
//     }
//
//     return maxSum
// }

// console.log(maxSumOfSizeK([4, 2, 1, 7, 8, 1, 2, 8, 10],3))
// console.log(maxSumOfSizeK([2, 1, 5, 1, 3, 2],3))

// 2️⃣ Find the Minimum Sum of a Subarray of Size K (Fixed Window).
function minSumOfSizeK(array:number[],k:number):number {
    let sum = 0;
    let minSum = 0;

    for (let i = 0; i < k; i++) {
        sum += array[i]
        minSum = Math.min(sum,minSum)
    }

    for (let i = k,j = 0; i < array.length; i++,j++) {
        sum -= array[j]
        sum += array[i]
        minSum = Math.min(sum,minSum)
    }

    return minSum
}
// console.log(minSumOfSizeK([3, -1, 4, 1, 2, -5, 1, 6],3))

// 3️⃣ Find the First Negative Number in Each Window of Size K.
// function negativeNumberInEachWindow(array:number[],k:number):number[] {
//     const negativeArray = []
//     const ansArray = []
//
//     for (let i = 0; i < k; i++) {
//         if(array[i] < 0){
//             negativeArray.push(array[i])
//         }
//         if(i + 1 === k){
//             if(negativeArray[0] !== undefined){
//                 ansArray.push(negativeArray[0])
//             }else{
//                 ansArray.push(0)
//             }
//         }
//     }
//
//
//     for (let i = k; i < array.length; i++) {
//         if(array[i - k] === negativeArray[0]){
//             negativeArray.shift()
//         }
//         if(array[i] < 0){
//             negativeArray.push(array[i])
//         }
//         if(negativeArray[0] !== undefined){
//             ansArray.push(negativeArray[0])
//         }else{
//             ansArray.push(0)
//         }
//     }
//
//     return ansArray
// }

// console.log(negativeNumberInEachWindow([2, -1, 3, -4, 5, 6, -7, 8, 9],3))
// console.log(negativeNumberInEachWindow([1, 2, 3, 4, 5],2))

// 5️⃣ Find the Maximum Consecutive Ones in a Binary Array.
function maxConsecutiveOnes(array:number[]):number {
    let max = 0;
    let current = 0;

    for (let i = 0,j = 0; i < array.length; i++) {
        if(array[i] === 1){
            current = i - j
            max = Math.max(current,max)
        }else{
            j = i
        }
    }
    return max
}
// console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
// console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]))

// 6️⃣ Find the Smallest Subarray with Sum ≥ K
// function smallestSubArray(array:number[], k:number) {
//     let minLength = Infinity, sum = 0, left = 0;
//
//     for (let right = 0; right < array.length; right++) {
//         sum += array[right]
//
//         while (sum >= k){
//             minLength = Math.min(minLength, right - left + 1);
//             sum -= array[left]
//             left++
//         }
//     }
//
//     return minLength
// }
// console.log(smallestSubArray([1, 4, 45, 6, 0, 19],53))
// console.log(smallestSubArray([2, 3, 1, 2, 4, 3],7))

// 7️⃣ Find the Longest Subarray with Sum ≤ K (Variable Window).
// function maxSubArrayLessThenK(array:number[],k:number){
//     let minLength = 0, sum = 0, left = 0;
//
//     for (let right = 0; right < array.length; right++) {
//         sum += array[right]
//         if(sum <= k) minLength = Math.max(minLength, right - left + 1);
//         while (sum >= k){
//             sum -= array[left]
//             left++
//         }
//     }
//
//     return minLength
// }
// console.log(maxSubArrayLessThenK([1, 2, 3, 4, 5],11))
// console.log(maxSubArrayLessThenK([2, 3, 1, 2, 4, 3],7))

// 8️⃣ Find the Longest Subarray with at Most K Distinct Characters.
