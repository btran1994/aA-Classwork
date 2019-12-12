// function myBind(arguments) {
//     return () => this.call(context)
// }

// function myBind() {
//     let remainingArgs = (function() {
//         return Array.from(arguments);
//     });
//     let remainingVals = remainingArgs();
//     let firstArgs = Array.from(arguments);
//     console.log(firstArgs.concat(remainingVals));
// }

Function.prototype.myBind = function() {
    let firstArgs = Array.from(arguments);
    let context = arguments[0];
    let remainingArgs = firstArgs.slice(1);
    let that = this;
    return function() {
        let callArgs = Array.from(arguments);
        let allArgs = remainingArgs.concat(callArgs);
        that.call(context, ...allArgs);
    };
};

function says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
}