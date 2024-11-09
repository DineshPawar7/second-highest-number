function SecondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        
        else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

const numbersArray = [1, 4, 7, 8, 4, 8, 1, 4, 9];
console.log(SecondLargest(numbersArray));
