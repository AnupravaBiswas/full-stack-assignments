function countV(arr, value) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < arr.length; i++) {

        // check if the character is at that position
        if (arr[i] == value) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
var arr1 = prompt('Enter a values of array: ');
var value1 = prompt('Enter a value to check: ');

//passing parameters and calling the function
var result = countV(arr1, value1);

// displaying the result
console.log(result);