const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function (hgyjty) {
    if (answer === 'yes') {
        callback(true);
    } else {
        callback(false);
    }
  });
}

// console.log(askIfGreaterThan(1,2));

function innerBubbleSortLoop(arr, i=0, madeAnySwaps=false, outerBubbleSortLoop) {
  
  //debugger;
  if (i < arr.length - 1){
    console.log(arr);
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      } 
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }

  // if (!madeAnySwaps) {
  //   return arr;
  // }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

