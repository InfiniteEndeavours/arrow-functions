/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b){
    // Code block 
    return a + b;
}
let sum1 = addTwoNumbers(1, 1);
console.log(sum1);
// Arrow Function With Parameters
const addTwoNum = (a, b) => {
    // Code block 
    return a + b;
}
let sum2 = addTwoNum(4, 1);
console.log(sum2);
// Single Line Arrow Function With Parameters
const twoNumbers = (a, b) => a + b;

let sum3 = twoNumbers(4, 4);
console.log(sum3);
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello =()=>console.log('Hello!');
sayHello();
// Returning Multiple Lines
const returnMulti = () => (
    `<p>
        Test
    </p>`
);

console.log(returnMulti());