//Min To Front
/**
 * Given an array of comparable values, move the lowest element to array’s front,
 *  shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.
 *  Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always,
 *  do this without using built-in functions.
 */
function minToFront(arr){
    let minValue = arr[0];
    let minIndex = 0;

    //find min value and its index
    for(let i = 1; i < arr.length;i++){
        if(arr[i] < minValue){
            minValue = arr[i];
            minIndex = i;
        }
    }
    //shift elements to the right of min index
    for (let i = minIndex; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = minValue;
    console.log(arr)

}
minToFront([4,2,1,3,5])