let color;

function changeColor() {
    color=document.getElementById("input").value;
    if (color==="black") {
        document.getElementById("page-wrapper").style.backgroundColor=`${color}`;
        document.getElementById("page-wrapper").style.color="white";
    }
    else {
        document.getElementById("page-wrapper").style.backgroundColor=`${color}`;
        document.getElementById("page-wrapper").style.color="black";
    }
}

// below is manual allowing 5 prints
// let input;
// let limit=0;
// function push() {
//     limit=limit+1;
//     document.getElementById("input").value;
//     if (limit<=5) { //will allow print 5 times, but we want it to be automatic so use loop to print 5 times at once
//         console.log(input); //not in "" bc we want value of input
//     }
// }
//
// automate the above process
//
// let input;
// function push() {
//     document.getElementById("input").value;
//     for (let i=0; i<5; i=i+1) { //limit starts at zero, cant go over 5 or you can do i<1000; i=i+200 also bc we specify limit inside we don't need the let limit like the manual one
//         console.log(input);
//     }
// }