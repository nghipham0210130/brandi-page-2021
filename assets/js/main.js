function hamburgerFunction(){
    var x = document.getElementById("myNavbar");
    if (x.className === "inner__collapse") {
        x.className += " show";
    } else {
        x.className = "inner__collapse";
    }
}