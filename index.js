let k = document.getElementById("myBtn");
k.addEventListener("mouseover", mouseOverFunction);
k.addEventListener("click", clickFunction);
k.addEventListener("mouseout", mouseOutFunction);

function mouseOverFunction() {
    document.getElementById("clickme").innerHTML = "Mouse Over! <br>";

}

function clickFunction() {
    document.getElementById("clickme").innerHTML = "Mouse click!<br>"
}



function mouseOutFunction() {
    document.getElementById("clickme").innerHTML = "Mouse out!<br>";
}