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

// BONUS: Remove At
console.log("Remove At:")
/***********************************
Given an array and an index into array, remove and return the array value at that index.
Prove the value is removed from the array by printing it. 
Think of popFront(arr) as equivalent to removeAt(arr,0).

Examples:

removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
 */
function removeAt(arr,index){
    var removedValue = arr[index];
    //Shift elements to the left starting from the given index
    for(var i = index; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;//removes duplicate last element

    console.log("Removed value:", removedValue);
    console.log("Modified array:", arr);
}
removeAt([1,2,3,4,5], 2)
console.log("-------------")

//BONUS: Swap Pairs
console.log("Swap Pairs:")
/****************************************
Swap positions of successive pairs of values of given array.
If length is odd, do not change the final element.

Examples:

insertAt([1,2,3,4]) => [2,1,4,3]
insertAt(["Brendan",true,42]) => [true,"Brendan",42]
 *******************************************/
function insertAt(arr){
    //this loop ensures that it process the array in pairs
    for(let  i = 0; i < arr.length -1;i+=2){
        let temp = arr[i]
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    console.log("Modified array:", arr);
}
insertAt([1,2,3,4,5])