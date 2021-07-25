setInterval(() => {
let a = new Date();
let tim = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[a.getMonth()];


var day = new Array();
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednusday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
var m = day[a.getDay()];


let date = a.getDate()+" "+ n +", "+m;
let year =a.getFullYear();
document.getElementById("time").innerHTML=tim;
document.getElementById("day").innerHTML=date;
document.getElementById("year").innerHTML=year;
}, 1000);