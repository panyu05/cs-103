let age;
function check() {
    age=document.getElementById("age").value;
    if (Number(age) < 0) {
        document.getElementById("message").innerHTML="negative numbers are not acceptable";
        document.getElementById("age").value="";
    }else if (isNaN(Number(age))) {
        document.getElementById("message").innerHTML="user has failed to enter a number";
        document.getElementById("age").value="";
    }else if (Number(age)%1 !== 0) {
        document.getElementById("message").innerHTML="user has not entered a valid age";
        document.getElementById("age").value="";
    }else if (Number(age) >= 18 && Number(age) < 120){
        document.getElementById("container").style.visibility="visible";
        document.getElementById("message").style.display="none";
        document.getElementById("age").value="";
    }else {
        document.getElementById("message").innerHTML="you may not view the content";
    }
}

let today = new Date();

let day = (today.getDate()>=10? (today.getDate()) : `0` + (today.getDate()));
let month = (today.getMonth()+1)>=10? (today.getMonth()+1) : `0` + (today.getMonth() +1);
let year = today.getFullYear();

// let hours = today.getHours();
// let hours = (today.getHours()>=10? (today.getHours()) : `0` + (today.getHours()));
// let minutes = (today.getMinutes()>=10? (today.getMinutes()) : `0` + (today.getMinutes()));
// // let minutes = (today.getMinutes()+1)>=10? (today.getMinutes()+1) : `0` + (today.getMinutes() +1);
// let ampm;

//below is attempt 1
// if (hours > 12) {
//     hours = '0' + (hours - 12);
//     ampm = 'PM';
// }
// else if (hours >= 12) {
//     ampm = 'PM';
// }
// else {
//     ampm = 'AM';
// }

//below is attempt 2
// if (hours > 12) {
//     hours = hours - 12;
//     ampm = 'PM';
// }
// else if (hours >= 12) {
//     ampm = 'PM';
// }
// else {
//     ampm = 'AM';
// }
//
// if (hours<10) {
//     hours = '0' + hours;
// }

// Converting military time to AM/PM
let hours = today.getHours();
let minutes = today.getMinutes();
let ampm;

// If current hour is less than 12 (including 00:00):
if (hours < 12) {
    // Then it's morning.
    ampm="AM";
    // and if it is single digit add a 0 before it
    if(hours<10){
        hours="0"+hours;
    }
// If it's not less than 12, it could be 12 or more,
} else{
    // Which means it's nighttime
    ampm="PM";

    // and if it is in single digits, add a 0 before it.
    if(hours-12<10 && hours-12!==0){
        hours="0"+(hours-12);

        // but if it is 22 or 23, just display it as 10 or 11.
    } else if(hours-12>=10){
        hours=hours-12;

        // and if it isn't single digit, 10, or 11, then it must be 12.
    } else {
        hours=12;
    }
}

// if less than 10 (1 to 60)
if (minutes<10){
    // Add a "0" before it.
    minutes="0"+minutes;
}

document.getElementById("time-date").innerHTML=
    `
    <h3>${hours + ":" + minutes + ampm}</h3>
    <h5>${day + "/" + month + "/" + year}</h5>
    `
;