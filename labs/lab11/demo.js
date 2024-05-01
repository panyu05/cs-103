/*
max width to make images responsive

Boolean Var
for button bc it enables a function you need to use function which is why we give onclick
bc it's gonna trigger a function, we denote that with ()
*/

// let bool=true; //true is just a value (a number value can hold any number of values but boolean can only hold two so we need to start by assigning it someone (TorF)
// let image;
//
// function toggle() { //the toggle is now connected to the button in HTML
//     image=document.getElementById("image"); //img doesnt have value so not.value
//     if (bool===true) {
//         image.style.display="block";
//         //need to change from true to false bc the second time it is pushed
//         bool=false;
//         //if true show and turn off light for second time so now that it's false in complier so next time we push, it will check to see if it is true and it wont be
//     }
//     else {
//         image.style.display="none"
//         bool=true;
//     }
// }

function power() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;

    let result = 1;
    for (let i = 0; i < second; i = i + 1) {
        result = first * result;
    }

    document.getElementById("output").innerHTML = String(result);
    // document.getElementById("input-1").value = "";
    // document.getElementById("input-2").value = "";*/

    colorChange(result) //pass result to helper function and let helper decide what to do with it

    // if (Number(result) < 0) {
    //     document.getElementById("output").style.color = "red";
    // }
    // else {
    //     document.getElementById("output").style.color = "black";
    // } instead of this do helper function (below)
}

function colorChange(){
    if (Number(result) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
}

