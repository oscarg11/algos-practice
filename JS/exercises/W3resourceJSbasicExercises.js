/* 
    1. Write a JS function to display the current day and time in the following format...
    Today is: Sunday
    Current time is: 10 PM:30:38
 */

function currentDayAndTime(){
    let currentDate = new Date();

    var days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];

    //get current day
    let todayIs = days[currentDate.getDay()]

    // Get the current time with hour, minute, second in 12-hour format
    let hours = currentDate.getHours() % 12 || 12; // Convert to 12-hour format and handle midnight as 12
    let minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Ensure 2-digit minute
    let seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Ensure 2-digit second
    let ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM or PM

    // format time in required format
    let formattedTime = `${hours} ${ampm}:${minutes}:${seconds}`

    console.log("Today is: " + todayIs)
    console.log(`Current Time is: ${formattedTime}`)
    

}

currentDayAndTime();