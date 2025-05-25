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

function factorial(n: number) {
    if (n <= 0 || n === 1) {
        return 1;
    }

    const multiple = factorial(n - 1);
    return multiple * n;
}

// console.log(factorial(5));

function reverseArray(arr: number[], auxArr: number[] = []) {
    if (arr.length === 1) {
        return auxArr.push(arr[0])
    }
    auxArr.push(arr[arr.length - 1])
    reverseArray(arr.slice(0, -1), auxArr)
    return auxArr
}

// console.log(reverseArray([1,2,3,4,5]));

function reverseStringFactorial(s: string, r: string = '') {
    console.log('S',s,'R',r);
    if (s.length === 1) {
        r += s[0]
        console.log('S',s,'R',r);
        return r
    }
    r += s[s.length - 1]
    reverseStringFactorial(s.slice(0, -1), r)
    console.log("After Recurssion",r);
    return r
}

function checkStringPalindrome(s: string) {
    const reversed = reverseStringFactorial(s)
    if (reversed === s) return true
    return false
}

let s = 'abcd'
// console.log(s.slice(0, -1));
// console.log(s.length);
// s = s.slice(0, -1);
// console.log(s.slice(0, -1));
// console.log(s.length);
// console.log(s.slice(0, -1));
// s = s.slice(0, -1);
// console.log(s.length);

// console.log(s[s.length-1]);
console.log(reverseStringFactorial(s));
