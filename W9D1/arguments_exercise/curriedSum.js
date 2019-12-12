// function curriedSum(numArgs) {
    // let numbers = [];
    // function _curriedSum(num) {
    //     numbers.push(num);
    //     if (numbers.length === numArgs) {
    //         let result = 0;
    //         numbers.forEach(function(el) {
    //             result += el;
    //         });
    //         return result;
    //     } else {
    //         return _curriedSum;
    //     }
    // }
    // return _curriedSum;
// }

Function.prototype.curry = function(numArgs) {
    let numbers = [];
    let that = this;
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            that.apply(null, numbers);
            // that(numbers);
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
};

let fu = function(...array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
};
