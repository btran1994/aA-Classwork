// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum;
// }

function restSum(...args) {
    let sum = 0;
    args.forEach(function(el) {
        sum += el;
    });
    return sum;
}