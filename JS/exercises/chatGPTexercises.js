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