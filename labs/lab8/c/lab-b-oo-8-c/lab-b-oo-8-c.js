let booleanVar = false;

function boo() {
    if (booleanVar === false) {
        document.getElementById("s").style.display = "block";
        document.getElementById("c").style.display = "none";
        booleanVar = true;
    }
    else {
        document.getElementById("s").style.display = "none";
        document.getElementById("c").style.display = "block";
        booleanVar = false;
    }

}
