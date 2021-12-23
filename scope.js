let bonous = 20 ;


function add (num1 , num2) {
    let result = num1 + num2 + bonous ;
    // console.log(bonous) ;
    if (result > 9) {
        const mood = "happy";
        console.log(mood)
    }
    return result ;
};

const output = add (52,23);
console.log(output);