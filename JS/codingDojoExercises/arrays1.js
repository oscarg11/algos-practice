//1.) Push Front
/****
Given an array and an additional value, insert this value at the beginning of the array.
You may use .push(), you are able to do this without it though!
Ex:
pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([5,7,2,3]) => [7,99]
 */
console.log("Push Front:")
function pushFront(arr,val){
    for(var i = arr.length; i > 0; i--){
        arr[i] = arr[i-1]
    }
    arr[i] = val
    console.log(arr)
}
pushFront([1,2,3,4], 8)


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
    let removedValue = arr[0];
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length--;
    console.log("Removed value: ", removedValue)
    console.log(arr)

}
popFront([1,2,3,4])


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
function insertAt(arr,index,newVal){
    for(var i = arr.length; i > index; i--){
        arr[i] = arr[i - 1];
    }
    arr[i]=newVal
    console.log(arr)
}
insertAt([1,2,3,4],2,99)


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
    let removedValue = arr[index]
    for(var i = index; i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    console.log("removed value: ", removedValue)
    console.log(arr)
}

removeAt([1,2,99,3,4], 2)


//BONUS: Swap Pairs
console.log("Swap Pairs:")
/****************************************
Swap positions of successive pairs of values of given array.
If length is odd, do not change the final element.

Examples:

insertAt([1,2,3,4]) => [2,1,4,3]
insertAt(["Brendan",true,42]) => [true,"Brendan",42]
 *******************************************/
function swapPairs(arr){
    for(var i =0; i < arr.length-1;i+=2){
        var temp = arr[i]
        arr[i] = arr[i+1];
        arr[i+1] = temp
    }
    console.log(arr)
}
swapPairs([1,2,3,4]);

//BONUS: Remove 
console.log("Remove Dupes:")
/**
Given a sorted array, remove duplicate values. Because array elements are already in order,
all duplicate values will be grouped together. If you already made the Remove At function,
you are welcome to use that! If you solved this using nested loops, for an extra challenge,
try to do it without any nested loops!

Examples:

removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
removeDupes([9,19,19,19,19,19,29]) => [9,19,29]
 */

