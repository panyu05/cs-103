function checkCharacter() {
    let characters = document.getElementById("characters").value;


    let character = document.getElementById("characters").value.toLowerCase();
    let outputElement = document.getElementById("output");


    if(character==="flynn rider"){
        outputElement.innerHTML="Flynn Rider is introduced as a thief. He Finds Rapunzel in her tower while running away from the royal guards. He becomes Rapunzel's love interest as the movie progresses. " +
            "<div class=\"character-image\">" +
            "<img src=\"../src/flynn.jpg\" alt=\"Flynn-Rider\">"+
            "</div>";




    }  if(character==="rapunzel"){
        outputElement.innerHTML="Rapunzel is the long lost princess of her kingdom, Corona. She was kidnapped by Mother Gothel and becomes trapped in a tower that she yearns to leave.She has long, magical hair that has the power to heal." +
            "<div class=\"character-image\">" +
            "<img src=\"../src/rapunzel.jpg\" alt=\"Rapunzel\">"+
            "</div>";


    }
}
/*The Tangled page's css was created by Christina Son*/
