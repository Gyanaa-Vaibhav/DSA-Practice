// 1️⃣ Factorial using Recursion → factorial(n) = n * factorial(n - 1)
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    return n * factorial(n - 1);
}
// console.log(factorial(4))
// 3️⃣ Sum of Digits of a Number using Recursion → sum(1234) → 1+2+3+4 = 10
function sumOfDigitsUsingRecursion(n) {
    if (Number(n.toString().length) < 2)
        return n;
    return (Number(n.toString().slice(0, 1)) + sumOfDigitsUsingRecursion(Number(n.toString().slice(1))));
}
// console.log(sumOfDigitsUsingRecursion(123))
// 4️⃣ Reverse a String using Recursion → "hello" → "olleh"
function reverseString(s) {
    if (s.length === 1)
        return s;
    return s.slice(-1) + reverseString(s.slice(0, -1));
}
console.log(reverseString('hello'));
// 5️⃣ Check if a Number is Palindrome using Recursion
function checkPalindrome(s) {
    if (s.length <= 1)
        return true;
    if (s.slice(0, 1) !== s.slice(-1))
        return false;
    return checkPalindrome(s.slice(1, -1));
}
// console.log(checkPalindrome("racecar"))
// 7️⃣ Power Function using Recursion (x^n)
function power(n, e) {
    if (e === 1)
        return n;
    return n * power(n, e - 1);
}
// console.log(power(2,5))
