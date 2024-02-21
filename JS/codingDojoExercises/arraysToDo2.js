//1) Reverse
/**
Given a numerical array, reverse the order of values,
in-place. The reversed array should have the same length,
with existing elements moved to other indices so that order of elements is reversed.
Working 'in-place' means that you cannot use a second 
array – move values within the array that you are given.
As always, do not use built-in array functions such as splice().
 */
console.log("Reverse Array: ")
function ReverseArray(arr){
    let leftIndex =0;
    let rightIndex = arr.length -1;

    while(leftIndex<rightIndex){
        //swap elements with temporary var
        let temp = arr[leftIndex]
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp;

        //move indices to the middle
        leftIndex++;
        rightIndex--;
    }
    console.log(arr)
}
ReverseArray([1,2,3,4,5])

/**
 * Rotate:
 * Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values
 * to the right by that amount. 'Wrap-around' any values that shift off array's end to 
 * the other side, so that no data is lost. Operate in-place: given ([1,2,3], 1).
 * change the array to [3,1,2]. Don't use built in functions.
 * Second: allow negative shiftBy (shiftL, not R).
 * Third: minimize memory usage. With no new array, handle arrays/shiftBys in the 
 * millions.
 * Fourth: minimize the touches of each element.
 */
console.log("Rotate:")

function rotateArr(arr, shiftBy){
    for(let i=0; i<arr.length; i++){
        let currentIndex = 0;
        currentIndex=(arr[i] + shiftBy)%arr.length
        
    }
    console.log(arr)
}
rotateArr([1,2,3,4,5], 1)