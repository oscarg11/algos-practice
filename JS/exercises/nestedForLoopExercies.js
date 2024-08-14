/* 
1) Multiplication Table

write a program that prints a multiplication table for number 1 through 5.
the output should look like...
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25

  */
console.log("1. Multiplication Table")
function multiplicationTable(){
    for(let i = 1; i<6;i++){
        let rowOutput = "" // empty string to hold the results of multiplication for the current row

        for(let k = 1; k<6;k++){    
            rowOutput += i*k + " " // multiply the current row number (i) by the current column number (k).
                                    // append the result followed by a space to the rowOutput string.
        }
        console.log(rowOutput)
    }
}
multiplicationTable();
/*
2.) Pattern Printing - Right angles trianle

write a program that prints a right-angled triangle
of stars ("*") with 5 rows. The out put should look like...

*
**
***
****
*****

*/ 
console.log("-----------------")
console.log("2. Right Triangle")

function rightTriangle(){
    //set the outer loop to 5 for eachrow
    for(let i = 1; i<6;i++){
       let rowOutput = ""
       //set the inner loops condition to i (number of rows)
       for(let k = 1; k<=i; k++){
        //whatever row number the innerloop is on will determine the amount of star printed
        rowOutput += "*"
       }
       console.log(rowOutput)
    }
}
rightTriangle()