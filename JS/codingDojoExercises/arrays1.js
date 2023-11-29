//1.) Push Front
/****
Given an array and an additional value, insert this value at the beginning of the array.
You may use .push(), you are able to do this without it though!
Ex:
pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([5,7,2,3]) => [7,99]
 */
console.log("Push Front")
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
console.log("Pop Front")
/**
Given an array, remove and return the value at the beginning of the array.
Prove the value is removed from the array by printing it. You may use .pop(),
you are able to do this without it though !

Ex:
popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
 */
function popFront(arr){
    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    console.log( arr)
}
popFront([1,2,3,4])