//1.) Push Front
/****
Given an array and an additional value, insert this value at the beginning of the array.
You may use .push(), you are able to do this without it though!
Ex:
pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([5,7,2,3]) => [7,99]
 */
function pushFront(arr, val){
    for(var i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    console.log(arr)
}
pushFront([1,2,3,4], 5)