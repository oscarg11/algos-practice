//Find the largest number in an array
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