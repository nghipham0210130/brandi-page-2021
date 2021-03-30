// show inner__collapse when click Hamburger button
function hamburgerFunction() {
    var x = document.getElementById("my__navbar");
    if (x.className === "inner__collapse") {
        x.className += " show";
    } else {
        x.className = "inner__collapse";
    }
}


// show class active when click 
var header = document.getElementById("my__navbar");
var links = header.getElementsByClassName("nav__link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}