/*
    1.) Minimun
        Chapter 2 introduced the standard function Math.min, which returns its
        smallest argument (see "Return Values" on page 27). We can build something
        like that now. Write a function min that takes two arguments and returns 
        their minimuns.
 */
console.log("1.) Minimum")

function min(a, b){
    return Math.min(a, b);
}

console.log(min(100,6));

console.log("--------------")

/*
    2.) Recursion
        We've seen that % (the remainder operator) can be used to test whether
        a number is even or odd by using %2 to see whether its divisible by 2
        Heres another way to define whether a positive whole number is even
        or odd.

        * Zero is even
        * One is odd
        * For any other number N, its evennes is the same as N - 2
        
        Define a recursive function isEven corresponding to this description.
        The function should accept a single parameter (a positive whole number)
        and return a boolean

        Test it on 50 and 75. See how it behaves on -1. Why? can you think of a way
        to fix this?
 */
console.log("2). Recursion")

function isEven(n){
    if(n == 0){
        return true;
    }else if(n == 1){
        return false;
    }else{
        return isEven(n-2);
    }
}
console.log(isEven(50))