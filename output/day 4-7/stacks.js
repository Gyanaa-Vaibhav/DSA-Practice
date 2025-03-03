// 1️⃣ Implement a Stack from Scratch (Using a Class in JavaScript).
class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
        return value;
    }
    pop() {
        if (!this.isEmpty())
            return this.stack.pop();
        return false;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    printStack() {
        console.log(this.stack);
    }
    size() {
        return this.stack.length;
    }
}
// 2️⃣ Reverse a String Using a Stack.
function reverseStringUsingStack(string) {
    const stack = new Stack();
    let reversedString = '';
    for (let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }
    for (let i = 0; i < string.length; i++) {
        reversedString += stack.pop();
    }
    return reversedString;
}
// console.log(reverseStringUsingStack("Hello"))
// console.log(reverseStringUsingStack("world"))
// 3️⃣ Check if a Given String of Parentheses is Valid (Balanced Parentheses)
function validParentheses(string) {
    const stack = new Stack();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(")
            stack.push(string[i]);
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ")") {
            if (!stack.pop()) {
                return false;
            }
        }
    }
    return stack.size() === 0;
}
// console.log(validParentheses("(((())))"))
// 4️⃣ Find the Next Greater Element for Each Element in an Array.
function nextGreaterElement(array) {
    const ansArray = [];
    const stack = new Stack();
    for (let i = 0; i < array.length; i++) {
        let largestNumber = stack.peek() || 0;
        let found = false;
        if (array[i] >= largestNumber) {
            for (let j = i; j < array.length; j++) {
                if (array[j] > array[i]) {
                    largestNumber = array[j];
                    stack.push(largestNumber);
                    ansArray.push(largestNumber);
                    found = true;
                    // To reset the array back to 0 because we need to find the next greatest element,
                    // not the greatest element to right
                    stack.pop();
                    // To prevent the worst case form going to O(n^2) in increasing ordered array
                    break;
                }
            }
            // if no number is found we push -1
            if (!found)
                ansArray.push(-1);
        }
    }
    return ansArray;
}
// console.log(nextGreaterElement([3, 7, 1, 7, 8]))
// console.log(nextGreaterElement([6, 8, 4, 3, 5, 2]))
// 5️⃣ Find the Next Smaller Element for Each Element in an Array.
// same as above just replace the conditions
// 6️⃣ Sort a Stack Using Another Stack (Without Using .sort()).
function sortUsingAnotherStack(array) {
    const stack = new Stack();
    const tempStack = new Stack();
    for (let i = 0; i < array.length; i++) {
        while (!stack.isEmpty() && stack.peek() > array[i]) {
            tempStack.push(stack.pop() || 0);
        }
        stack.push(array[i]);
        while (!tempStack.isEmpty()) {
            stack.push(tempStack.pop() || 0);
        }
    }
    return stack;
}
// console.log(sortUsingAnotherStack([5, -2, 9, -7, 3]))
// console.log(sortUsingAnotherStack([1,2,9,8,7]))
// 7️⃣ Evaluate a Postfix Expression (Reverse Polish Notation).
function reversePolishNotation(array) {
    const stack = new Stack();
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b)
    };
    for (let i = 0; i < array.length; i++) {
        const charCode = array[i].charCodeAt(0);
        if (charCode < 48) {
            const operand2 = (Number(stack.pop()) || 0);
            const operand1 = (Number(stack.pop()) || 0);
            const result = operations[array[i]](operand1, operand2);
            stack.push(`${result}`);
        }
        else {
            stack.push(array[i]);
        }
    }
    return stack.peek();
}
// console.log(reversePolishNotation(["10", "6", "9", "3", "/", "-", "*"]))
// 8️⃣ Find the Stock Span (How Many Days Before Was the Price Lower?).
function stockSpan(prices) {
    const stack = new Stack(); // Stack to store indices
    const spans = new Array(prices.length).fill(1); // Default span = 1 for each day
    for (let i = 0; i < prices.length; i++) {
        // Remove elements from stack while stack is not empty and previous price is smaller
        while (stack.size() > 0 && prices[stack[stack.size() - 1]] <= prices[i]) {
            stack.pop();
        }
        // If stack is empty, span = i + 1 (entire range before)
        // Otherwise, span = i - last smaller price index
        spans[i] = stack.size() === 0 ? i + 1 : i - stack[stack.size() - 1];
        // Push current index to stack
        stack.push(i);
    }
    return spans;
}
