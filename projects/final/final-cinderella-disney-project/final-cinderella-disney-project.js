let reveal;
function check() {
    reveal=document.getElementById("reveal").value;
    if (String(reveal) === "bibbidi-bobbidi-boo" || String(reveal) === "bibbidi bobbidi boo"){
        document.getElementById("container").style.visibility="visible";
        document.getElementById("message").style.display="none";
    }
    else {
        document.getElementById("message").innerHTML="Guess Again~";
    }
}

//the Cinderella JS was created by Yu Pan