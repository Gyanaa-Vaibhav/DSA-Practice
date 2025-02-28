const array = [1,2,3,4,1,2,3,4,5,6,7]
// 1️⃣ Find the Frequency of Each Element in an Array
function findFrequency(array) {
    // Space Complexity is O(n) and time is O(n)
    const map = {};
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]) {
            map[array[i]]++
        } else {
            map[array[i]] = 1
        }
    }
    return map
}
// console.log(findFrequency(array))

// 2️⃣ Find the First Non - Repeating Element in an Array
function firstNonRepeatingElement(array) {
    // Space Complexity is O(n) and time is O(n)
    const map = findFrequency(array);
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] === 1) {
            return array[i] // returns the number
        }
    }

    return null
}
// console.log(firstNonRepeatingElement(array));

// 3️⃣ Find the Intersection of Two Arrays(Optimized with HashMap)
function findIntersection(array, array2) {
    // Space Complexity is O(n) and item is O(2N) or O(N)
    const map = {};
    const map2 = {};
    
    // Optional removes the initial loop
    // const map = findFrequency(array)
    // const map2 = findFrequency(array2)
    const length = array.length >= array2.length ? array.length : array2.length;

    for (let i = 0; i < length; i++) {
        if (array[i]) {
            if (map[array[i]]) {
                map[array[i]]++;
            } else {
                map[array[i]] = 1;
            }
        }
        if (array2[i]) {
            if (map2[array2[i]]) {                
                map2[array2[i]]++;
            } else {
                map2[array2[i]] = 1;
            }
        }
    }
    
    if (array.length === length) {
        return countFrequencies(array, map2, length)
    } else {
        return countFrequencies(array2,map,length)
    }

    function countFrequencies(array, map, length) {
        const interSection = {};
        const newArray = [];
        for (let i = 0; i < length; i++) {
            if (map[array[i]]) {
                if (interSection[array[i]]) {
                    newArray.push(array[i])
                }
                interSection[array[i]] = 1;
            }
        }
        return newArray;
    }
}
// console.log(findIntersection(array,[1,2,3,4,7]));

// 4️⃣ Find the Union of Two Arrays(Optimized with HashMap)
function unionArray(array, array2) {
    // Cant think of a way to use the hashmap and no need even as there is no loop one
    // and instead of doing a.includes used an map to check
    const a = [];
    const b = {}
    const length = array.length >= array2.length ? array.length : array2.length

    for (let i = 0; i < length; i++) {
        if (!b[array[i]]) {
            b[array[i]] = 1;
            a.push(array[i])
        }

        if (i < array2.length) {
            if (!b[array2[i]]) {
                b[array2[i]] = 1;
                a.push(array2[i])
            }
        }
    }
    
    // Optional looping or else space complexity is O(n) and time is O(n)
    return a.sort((a, b) => a - b)
}
// console.log(unionArray(array,[11,2,3,15]))

// 5️⃣ Check if Two Arrays are Equal(Same Elements, Different Order)
function checkIfArraySame(array, array2) {
    // Time Complexity O(2N) or O(N) Space Complexity O(2N)
    if (array.length !== array2.length) {
        return false
    }
    let ans = true
    const map = findFrequency(array)
    const map2 = findFrequency(array2)
    const set = new Set();
    const set2 = new Set();
    
    for (let i = 0; i < array.length; i++) {
        if (!set.has(array[i])) {
            set.add(array[i])
        }
        if (!set2.has(array2[i])) {
            set2.add(array2[i])
        }
    }
    
    set.forEach(e => {
        if (map[e] !== map2[e]) {
            ans = false
        }
    })

    return ans
}
// console.log(checkIfArraySame([1,2,3,5,5,5],[1,5,5,3,2,6]));

// 6️⃣ Find the Largest Subarray with Equal 0s and 1s
function largestSubArrayWithZeroAndOne(array) {
    let count = 0
    const map = {}
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]) {
            map[array[i]]++
        } else {
            map[array[i]] = 1
        }

        if (map[0] === map[1]) {
            count++
        }
    }

    return count
}
// console.log(largestSubArrayWithZeroAndOne([1,0,1,0,1,0,1,0,2]));

// 7️⃣ Find the Longest Consecutive Sequence in an Array
function longestConsecutiveSequence(array) {
    let maxLength = 0;
    const set = new Set();

    for (let i = 0; i < array.length; i++) {
        if (!set.has(array[i])) {
            set.add(array[i])
        }
    }

    set.forEach(num => {
        if (set.has(num - 1)) {
            current_num = num
            current_length = 1

            while (set.has(current_num)) {
                current_num++;
                current_length++;
            }

            if (current_length > maxLength) {
                maxLength = current_length
            }
        }
    })

    return maxLength
}
// console.log(longestConsecutiveSequence([1,2,3,4,5,8,9,10,11,12,13]));

// 8️⃣ Find the First Repeating Element(Optimized with HashMap)
function firstRepeatingElement(array) {
    // Space Complexity is O(n) and time is O(n)
    const map = findFrequency(array);
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] > 1) {
            return array[i] // returns the number
        }
    }

    return null
}
// console.log(firstRepeatingElement(array));

// 9️⃣ Check if a Given Subarray with Sum = 0 Exists
function subarrayWithSumZero(array) {
    let totalSum = 0;
    const sum = {0:1}

    for (let i = 0; i < array.length; i++) {
        totalSum += array[i]
        if (sum[totalSum]) {
            return [sum[totalSum],i]
        } else {
            sum[totalSum] = i + 1
        }
    }
    
    return false
}
// console.log(subarrayWithSumZero([1,2,3,10,10,-20]));

// 🔟 Find the Count of Subarray with a Given Sum K
function subarrayWithSumK(array,k) {
    let totalSum = 0;
    let count = 0
    const sum = { 0: 1 }

    for (let i = 0; i < array.length; i++) {
        totalSum += array[i];

        if (sum[totalSum - k]) {
            count += sum[totalSum - k];
            console.log(count,sum[totalSum-k],totalSum,totalSum-k);
            
        }

        sum[totalSum] = (sum[totalSum] || 0) + 1;
    }

    return count
}
// console.log(subarrayWithSumK([1, 2, 3, 4, 5],5));


// 1️⃣1️⃣ Find the Element That Appears More Than N / 3 Times (Better Than Sorting Method)
function moreThanN3Times(array) {
    const occurrence = Math.round(array.length / 3);
    const set = new Set()
    const map = {}

    for (let i = 0; i < array.length; i++) {
        map[array[i]] = (map[array[i]] || 0) + 1
    }

    for (let i = 0; i < array.length; i++) {   
        if (map[array[i]] > occurrence) {
            set.add(array[i])
        }
    }

    return set.size ? [...set] : null
}
// console.log(moreThanN3Times([5, 5, 5, 10, 10, 20]));

// 1️⃣5️⃣ Find Two Numbers That Appear Only Once in an Array(Rest Appear Twice)
function twoAppearOnlyOnce(array) {
    const map = {}
    const ans = []

    for (let i = 0; i < array.length; i++) {
        map[array[i]] = (map[array[i]] || 0) + 1
    }
    
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] === 1) {
            ans.push(array[i])
            if (ans.length === 2) {
                return ans
            }
        }
    }

    return ans
}
// console.log(twoAppearOnlyOnce([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(twoAppearOnlyOnce([1, 2, 1, 3, 2, 5]));

// 1️⃣3️⃣ Find Pairs in an Array That Sum to a Target(Optimized with HashMap)
function twoSumHashMap(array,k) {
    const map = new Map()
    const map2 = new Map()
    const ans = []

    for (let i = 0; i < array.length; i++) {
        map.set(array[i], array[i])
        map2.set(array[i],false)
    }    

    for (let i = 0; i < array.length; i++) {
        const element = k - array[i];
        if (map.has(element)) {
            if (!map2.get(element)) {
                ans.push([array[i], map.get(element)])
                map2.set(element,true)
            }
        }
    }

    return ans
}
// console.log(twoSumHashMap([1, 1, 1, 2, 2, 3], 4));

// 1️⃣4️⃣ Find the Longest Subarray with Equal Number of Even & Odd Numbers
// Same as 6th I guess
