//1.) Find the largest number in an array
console.log("1.) Find Largest Value in array :")
function findLargest(arr){
    var largest = arr[0]
    for(var i = 0; i < arr.length; i++ ){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest);
    }

findLargest([12,50,5,38,78,2])

/* 2.) Reverse
reverse the elements of an array in place

example: 
reverse([1,2,3,4,5]) => [5,4,3,2,1]
*/
console.log("****************")
console.log("2.) Reverse Array:")
function reverse(arr){
    for(var i = 0; i<= (arr.length-1)/2;i++){
        currentElement = arr[i]
        arr[i] = arr[arr.length-1 - i];
        arr[arr.length - 1 - i] = currentElement
    }
    console.log(arr)
}
reverse([1,2,3,4])

/* 3.) Rotate Right
Given an array, rotate its elements to the right by a given number of steps

example:
rotateRight([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 */
console.log("****************")
console.log("3.) Rotate Right:")

function rotateRight(arr,steps){
    let newArr = new Array(arr.length) // creates a new array to hold the rotated elements

    steps = steps % arr.length; // ensures that if the number of steps is greater that the length it will rotate correctly

    for(let i = 0; i < arr.length; i++){
        //calculates the new index where the current element should go
        let newIndex = (i + steps) % arr.length;
        // place the element at its new index
        newArr[newIndex] = arr[i]
    }
    console.log(newArr)
}
rotateRight([1,2,3,4],1)