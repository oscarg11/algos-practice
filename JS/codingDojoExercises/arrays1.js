//1.) Push Front
/****
Given an array and an additional value, insert this value at the beginning of the array.
You may use .push(), you are able to do this without it though!
Ex:
pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([5,7,2,3]) => [7,99]
 */
console.log("Push Front:")
function pushFront(arr, val){
    for(var i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    console.log(arr)
}
pushFront([1,2,3,4], 5)
console.log("-------------")

//2.) Pop Front
console.log("Pop Front:")
/**
Given an array, remove and return the value at the beginning of the array.
Prove the value is removed from the array by printing it. You may use .pop(),
you are able to do this without it though !

Ex:
popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
 */
function popFront(arr){

    var removedValue = arr[0];
    //shifts indexs to the left
    for(var i = 0; i < arr.length -1; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log("Removed value:", removedValue);
    console.log("Modified array:", arr);
    
}
popFront([1,2,3,4])
console.log("-------------")

//3.) Insert At
console.log("Insert At:")
/****** 
Given an array, index, and additional value, insert the value into array at given index.
You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
You may use .push(), you are able do this without it though!
Ex:
insertAt([100,200,5], 2, 311) => [100,200,311,5]
insertAt([9,33,7], 1, 42) => [9,42,33,7]
*/
function insertAt(arr, index, val){
    for(var i = arr.length; i > index; i--){
        arr[i] = arr[i-1];
    }
    arr[index] = val;
    console.log(arr);
}
insertAt([1,2,3,4],3,45)
console.log("-------------")


