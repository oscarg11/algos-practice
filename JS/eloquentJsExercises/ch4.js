/*
    1.) The Sum of a Range
The intro of this book alluded to the follwing as a nice way to 
compute the sum of a range  of numbers:

console.log(sum(range(1, 10)));

    Write a range function that takes two arguments, start and end,
    and returns an array containing all the numbers from start up to
    (and including) end.

    Next, write a sum function that takes an array of numbers and returns
    the sum of these numbers. Run the example program and see whether it does 
    indeed return 55.

    As a bonus assignment, modify your range function to take an optional
    third argument that indicates the "step" value used when building the array.
    If no step is given, the elements go up by increments of one, corresponding
    to old behavior. The function call range (1, 10, 2) should return [1, 3, 5, 7, 9]
    Make sure it also works with negative step values so that the range(5, 2, -1) 
    produces [5, 4, 3, 2].
 */
function range(start, end,step){
    let arr = []
    if(step < 0){
        for(let i = start; i >= end; i += step){
            arr.push(i);
        }
        return arr;
    } else if(step === undefined){
        for(let i = start; i <= end; i++){
            arr.push(i);
        }
        return arr;
        
    }else{
        for(let i = start; i <= end; i += step){
            arr.push(i);
        }
        return arr;
    }
}
console.log(range(10, 0, -2));

function sum(arr){
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return "The sum is: " + sum;
}
console.log(sum([5,5,5]))