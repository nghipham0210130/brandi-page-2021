// Show inner__collapse when click Hamburger button
function hamburgerFunction() {
    var x = document.getElementById("my__navbar");
    if (x.className === "inner__collapse") {
        x.className += " show";
    }
    else {
        x.className = "inner__collapse";
    }
}

//
// // Add/delete class active when click on header
// var header = document.getElementById("my__navbar");
// var links = header.getElementsByClassName("nav__link");
// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

// Slick for Banner
$('.banner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
});

// Slick for Features
$('.features__slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
});

//Slick for Team
$('.team__slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear',
});

//Count to for Fun Fact
$(window).on("load resize",function() {

    var counters = $(".timer");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart += 2;
                counters[id].innerHTML = localStart;
            }
        }, 4);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});

// Add/delete class active when scroll screen
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 10, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);

            //change background color for nav when scroll
            var nav = document.getElementById("nav");
            if (e.target.innerHTML !== "Home") {
                console.log(e.target.innerHTML);
                nav.setAttribute('style', 'background-color: $color-background-header');
            }
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#my__navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if ((refElement.position().top - 70) <= scrollPos && (refElement.position().top - 70 + refElement.height()) > scrollPos) {
            $('#my__navbar a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}



