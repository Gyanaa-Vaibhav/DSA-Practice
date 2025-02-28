const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1
function minAndMax(array) {
    let min = Infinity
    let max = -Infinity

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i]
        }
    }

    return [min, max]
}
// console.log(minAndMax(array))

// 2
function reverseInPlace(array) {
    for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
        const temp = array[i];
        array[i] = array[j]
        array[j] = temp
    }

    return array
}
// console.log(reverseInPlace(array));

// 3
function secondMax(array) {
    let max = -Infinity
    let sMax = -Infinity + 1
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > sMax && array[i] < max) {
            sMax = array[i]
        }
    }

    return sMax
}
// console.log(secondMax(array));

// 4
function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    
    return true
}
// console.log(isSorted(array));

// 5
function moveZerosToEnd(array) {
    const nonZero = []
    let zero = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            nonZero.push(array[i])
        } else {
            zero++;
        }
    }

    for (let i = 0; i < zero; i++) {
        nonZero.push(0)
    }

    return nonZero
}
// console.log(moveZerosToEnd([0,0,2,3,4,1,0,2,3,0,2]));

// 6
function firstRepeating(array) {
    // Option 1 O(n^2), Space O(1)
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i]
            }
        }
    }

    // Option 2 O(n log n), Space O(n)
    const newArray = [...array].sort((a, b) => a - b)
    for (let i = 0; i < newArray.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            return array[i]
        }
    }
    return false
}
// console.log(firstRepeating(array));

// 7
function missingNumber(array) {
    let naturalSum = 0
    let arraySum = 0;
    
    for (let i = 1; i <= array.length + 1; i++) {
        naturalSum += i;
    }
    
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
    }

    return naturalSum - arraySum;
}
// console.log(missingNumber([1,2,3,4,6]))

// 8
function interSection(a, b) {
    const res = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            // If found, check if the element is already in the result
            if (a[i] === b[j] && !res.includes(a[i])) {
                res.push(a[i]);
            }
        }
    }

    return res;
}
// console.log(interSection(array,[1,2,3,4]))

// 9
function unionArray(array, array2) {
    const a = [];
    const length = array.length >= array2.length ? array.length : array2.length

    for (let i = 0; i < length; i++) {
        if (!a.includes(array[i])) {
            a.push(array[i])
        }
        
        if (i < array2.length) {
            if (!a.includes(array2[i])) {
                a.push(array2[i])
            }
        }
    }
    return a.sort((a, b) => a - b)
}
// console.log(unionArray(array,[11,2,3,15]))

// 10
function leaderElement(array) {
    // Shortest and Simplest approach and small as well
    const leader = [...array].sort((a, b) => b - a)[0]

    // Alternate approach 
    const [, max] = minAndMax(array)
    
    return [leader,max]
}
// console.log(leaderElement([10,8,12,44,2,4,1,2]))

// 11
function threeLargestElements(array) {
    let max = -Infinity
    let sMax = -Infinity + 1
    let tMax = -Infinity + 2

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            tMax = sMax;
            sMax = max;
            max = array[i]
        }else if (array[i] > sMax) {
            tMax = sMax;
            sMax = array[i]
        }else if (array[i] > tMax) {
            tMax = array[i]
        }
    }

    return [max,sMax,tMax]
}
// console.log(threeLargestElements(array))

// 13
function leftRotateByOnePosition(array) {
    const first = array.shift();
    array.push(first);
    return array;
}
// console.log(leftRotateByOnePosition(array))

// 14
function leftRotateByKPosition(array, k) {
    const newArray = [];
    const rotateIndex = array.length < k ? k % array.length : k;

    if (rotateIndex === 0) {
        return array
    }

    for (let i = rotateIndex; i < array.length; i++) {
        newArray.push(array[i])
    }

    for (let i = 0; i < rotateIndex; i++) {
        newArray.push(array[i])
    }

    return newArray
}
// console.log(leftRotateByKPosition(array, 12));

// 15
function rightRotateByKPosition(array, k) {
    k = k % array.length;
    return array.slice(-k).concat(array.slice(0, -k));
}
// console.log(rightRotateByKPosition(array, 18));

// 18
function secondSmallest(array) {
    let min = Infinity
    let sMin = Infinity - 1

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            sMin = min;
            min = array[i]
        }
        if (array[i] < sMin && array[i] > min) {
            sMin = array[i]
        }
    }

    return sMin
}
// console.log(secondSmallest(array));

// 19
function equilibriumIndex(array) {
    let indexSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (indexSum === array[i]) {
            return i
        }
        indexSum += array[i]
    }

    return null
}
// console.log(equilibriumIndex([1,2,4,3,5,15]))

// 20
function maximProductOfTwoIndex(array) {
    let maxProduct = -Infinity;

    for (let i = 0; i < array.length - 1; i++) {
        const product = array[i] * array[i + 1]
        if (product > maxProduct) {
            maxProduct = product
        }
    }

    return maxProduct
}
// console.log(maximProductOfTwoIndex([9,9,2,3,1,2,3,4,23,12,0,3]));

// 21
function secondMaxAndMin(array) {
    let max = -Infinity;
    let sMax = -Infinity + 1;
    let min = Infinity;
    let sMin = Infinity - 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            sMax = max;
            max = array[i]
        } else if (array[i] > sMax) {
            sMax = array[i]
        }

        if (array[i] < min) {
            sMin = min
            min = array[i]
        } else if (array[i] < sMin) {
            sMin = array[i]
        }
    }

    return [sMax,sMin]
}
// console.log(secondMaxAndMin(array));

// 22
function checkIfSubsetArray(array,array2) {
    const length = array.length > array2.length ? array.length : array2.length;
    const length2 = array.length < array2.length ? array.length : array2.length;
    let matches = 0;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length2; j++) {            
            if (array[i] === (array2[j])) {
                matches++;
            }
        }
    }

    return matches === length2
}
// console.log(checkIfSubsetArray([1,2,3,4,5,6],[1,2,6]));

// 25
function rearrangeArray(array) {
    const positive = [];
    const negative = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negative.push(array[i])
        } else {
            positive.push(array[i])
        }
    }

    const length = positive.length < negative.length ? positive.length : negative.length;
    const all = [];

    for (let i = 0; i < length; i++) {
        all.push(positive[i])
        all.push(negative[i])
    }
    
    if (positive.length > negative.length) {
        all.push(...positive.slice(length))
    } else {
        all.push(...negative.slice(length))
    }

    return all
}
// console.log(rearrangeArray([1,2,3,4,-1,-3,-2]))

