// 1) Looping a Triangle
/****************
Write a loop that makes seven calls to console.log
to output the following triangle..
#
##
###
####
#####
######
#######
 ****************/
console.log("1.) Looping A Trianlge")

for(let triangle ="#"; triangle.length <= 7; triangle+="#" ){
    console.log(triangle);
}
console.log("--------")

// alternate solution
console.log("SOLUTION 2")
let triangle2 = "#"
while (triangle2.length <= 7){
    console.log(triangle2)
    triangle2 += "#"
}
console.log("--------------")

// 2) FizzBuzz
console.log("2) FizzBuzz")
/**
Write a program that uses consol.log to print all the numbers from 1 to 100
with two exceptions.

1) For numbers divisible by 3, print "Fizz" instead of the number.
2) For numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working modify your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5 (and still print "Fizz" and "Buzz"
for numbers divisible by only one of those.)
 */
for(let i = 1;i <= 100; i++){
    if( i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz")
    }else if( i % 3 ===0){
        console.log("Fizz")
    }else if (i % 5 ===0 ){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
console.log("--------------")

// 3) Chessboard
console.log("3) Chessboard")
/**
Write a program that creates a string that represents an 8x8 grid using new line characters to seperate lines,
At each position of the grid there is either a space or a "#" character
the characters should form a chessboard. Passing this string to console.log should show something like this.

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

when you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting a 
grid of the given width and height.

 */
let size = 8;
let chessString = " ";

for (let row = 0; row < size; row++) {
    let rowString = ""; //Initialize an empty string for each row

    for (let col = 0; col < size; col++) {

        if ((row + col) % 2 === 0) {
            rowString += " "; //add space
        } else {
            rowString += "#"; //add #
        }
    }

    console.log(rowString);
}