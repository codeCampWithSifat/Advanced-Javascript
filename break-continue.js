// const nums = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     console.log(num);
//     if (num >= 6) {
//         break ;
//     }   
// }

const nums = [1,2,3,-4,,-5,-8,12,15,19];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i]; 
    if (num < 0) {
        continue ;
    }
    console.log(num);
}