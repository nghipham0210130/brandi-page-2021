function hamburgerFunction(){
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar__items navbar__items--right") {
        x.className += " responsive";
    } else {
        x.className = "navbar__items navbar__items--right";
    }
}