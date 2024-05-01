let bool= false;
function styleChange(){
    if (bool === true){
        document.getElementById("header").style.backgroundColor = "#1F2544";
        document.getElementById("bar").style.backgroundColor = "#637A9F";
        document.getElementById("guide1").style.backgroundColor = "#FFF3CF";
        document.getElementById("guide2").style.backgroundColor = "#FFF3CF";
        document.getElementById("guide3").style.backgroundColor = "#FFF3CF";
        document.getElementById("guide4").style.backgroundColor = "#FFF3CF";
        document.getElementById("guide5").style.backgroundColor = "#FFF3CF";
        document.getElementById("footer").style.backgroundColor = "#1F2544";
        bool = false;
    }
    else{
        document.getElementById("header").style.backgroundColor= "#40A2E3";
        document.getElementById("bar").style.backgroundColor= "#1D24CA";
        document.getElementById("guide1").style.backgroundColor = "#97E7E1";
        document.getElementById("guide2").style.backgroundColor = "#97E7E1";
        document.getElementById("guide3").style.backgroundColor = "#97E7E1";
        document.getElementById("guide4").style.backgroundColor = "#97E7E1";
        document.getElementById("guide5").style.backgroundColor = "#97E7E1";
        document.getElementById("footer").style.backgroundColor = "#40A2E3";
        bool = true;
    }
}

//The Frozen JS was created by Ruomu Li