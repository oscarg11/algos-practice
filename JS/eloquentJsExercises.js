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