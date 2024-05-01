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