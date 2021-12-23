// // const numbers = [2,3,4,5,6,7,8];
// // const output = []
// // for (let i = 0; i < numbers.length; i++) {
// //     const number = numbers[i];
// //     const result = number * number ;
// //     output.push(result)
// //     // console.log(result);
// // };
// // console.log(output);

// const numbers = [11,12,13,14,15,16,17,18,19];

// function square (element) {
//     return element * element
// };

// const result = numbers.map(function(element) {
//     return element * element ;
// });
// console.log(result);

const numbers = [5,8,9,6,4,14,12,13,15,18,19];
const bigger = numbers.find((x) => {
    return x >= 3;
});
console.log(bigger);