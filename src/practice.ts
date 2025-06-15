function nto1(n: number) {
    console.log(n);
    if (n === 1) {
        return
    }

    nto1(n - 1);
}

// console.log(nto1(4));

function sumOfFirstN(n: number, sum: number = 0) {
    if (n === 1) {
        return sum + 1
    }
    return sumOfFirstN(n - 1, sum + n)
}

// console.log(sumOfFirstN(100));

function factorialN(n: number) {
    if (n <= 0 || n === 1) {
        return 1;
    }

    const multiple = factorial(n - 1);
    return multiple * n;
}

// console.log(factorialN(5));

function reverseArray(arr: number[], auxArr: number[] = []) {
    if (arr.length === 1) {
        return auxArr.push(arr[0])
    }
    auxArr.push(arr[arr.length - 1])
    reverseArray(arr.slice(0, -1), auxArr)
    return auxArr
}

// console.log(reverseArray([1,2,3,4,5]));

function reverseStringFactorialN(s: string, r: string = '') {
    console.log('S',s,'R',r);
    if (s.length === 1) {
        r += s[0]
        console.log('S',s,'R',r);
        return r
    }
    r += s[s.length - 1]
    reverseStringFactorialN(s.slice(0, -1), r)
    console.log("After Recursion",r);
    return r
}

function checkStringPalindrome(s: string) {
    const reversed = reverseStringFactorialN(s)
    if (reversed === s) return true
    return false
}

function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    const counter = {}
    for (let i = 0; i < num1.toString().length; i++) {
        counter[num1[i]] = ++counter[num1[i]] || 1;
    }

    for (let i = 0; i < num1.toString().length; i++) {
        counter[num1[i]] = ++counter[num1[i]] || 1;
    }
}
  
function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    const counter = {}

    for (let i = 0; i < arguments.length; i++) {
        const key = arguments[i]
        if (counter[key]) {
            return true
        }
        counter[key] = true
    }

    return false
  }
// console.log("Are there dupes",areThereDuplicates(0,1,1,2,3,4,5));



function capitalizeFirst(array) {
    // add whatever parameters you deem necessary - good luck!
    const newArray = []
    if (array.length === 0) return array
    array[0] = array[0][0].toLocaleUpperCase() + array[0].slice(1)
    return newArray.concat(array[0],capitalizeFirst(array.slice(1)))
}
  
// console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana'];

function insertSortN(array: number[]) {
    let holder = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            let j = holder
            while (j >= 0 && array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                j--
            }
        }
        holder++
    }
    return array
}

// console.log(insertSortN([2,1,3,9,8,7,6,5]));

function insertSort2(array) {
    let pointer = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            let j = pointer
            while (j >= 0 && array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                j--
            }
        }
        pointer++;
    }
    return array
}

// console.log(insertSort2([4,3,2,1]));

function swap(array,ele1, ele2) {
    [array[ele1], array[ele2]] = [array[ele2], array[ele1]];
}

function pivotSelf(array,start=0, end = array.length - 1) {
    let small = 1
    let large = 1
    for (let i = start + 1; i < end; i++) {
        const num = array[i]
        if (num < array[start]) {
            swap(array,small,large)
            small++;
            large++;
        } else {
            large++;
        }
    }
    
    swap(array, start, small - 1)
    return small - 1
}
// console.log(pivotSelf([3, 5, 4, 1, 2, 6, 7, 8, 0, -1]));

function pivot(array, start = 0, end = array.length - 1) {
    let pivot = array[start];
    let swapIndex = start;
    
    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array,swapIndex,i)
        }
    }

    swap(array, start, swapIndex)
    return swapIndex
}

function quickSort(array,left = 0, right = array.length - 1) {
    
    if (left < right) {
        const pivotIndex = pivot(array, left,right)
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }

    return array
}

console.log(quickSort([3, 5, 4, 1, 2, 6, 7, 8, 0]));

