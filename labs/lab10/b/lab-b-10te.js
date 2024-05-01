let first;
let second;

function addition() {
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    /*document.getElementById("output").innerHTML=Number(first)+Number(second);*/
    let result = Number(first)+Number(second);
    document.getElementById("output").innerHTML=String(result);
    /*document.getElementById("input-1").value="";
    document.getElementById("input-2").value="";*/

    if (Number(first)+Number(second) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
}

function subtraction() {
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)-Number(second);
    /*document.getElementById("input-1").value="";
    document.getElementById("input-2").value="";*/

    if (Number(first)-Number(second) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
}

function multiplication() {
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)*Number(second);
   /* document.getElementById("input-1").value="";
    document.getElementById("input-2").value="";*/

    if (Number(first)*Number(second) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
}

function division() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    document.getElementById("output").innerHTML = Number(first) / Number(second);
    // document.getElementById("input-1").value = "";
    // document.getElementById("input-2").value = "";

    if (Number(first)/Number(second) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
}

function power() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;

    let result=1;
    for (let i=0; i<second; i=i+1) {
        result=first*result;
    }

    document.getElementById("output").innerHTML=String(result);
    // document.getElementById("input-1").value = "";
    // document.getElementById("input-2").value = "";*/

    if (Number(result) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
}

function erase() {
    document.getElementById("input-1").value="";
    document.getElementById("input-2").value="";
    document.getElementById("output").innerHTML="";
}