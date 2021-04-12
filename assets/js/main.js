// Show inner__collapse when click Hamburger button
function hamburgerFunction() {
    var x = document.getElementById("my__navbar");
    if (x.className === "inner__collapse") {
        x.className += " show";
    }
    else {
        x.className = "inner__collapse";
    }
    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();
        $('#my__navbar').removeClass("show");
    });
}

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

    for (var i = 0; i < countersQuantity; i++) {
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

    for (var j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});

var distanceTop;
if ($(document).resize > 767) {
    distanceTop = 70;
}
else {
    distanceTop = 50;
}

// Add/delete class active when scroll screen
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();

        $(document).off("scroll");

        $("a").each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);


        $("html, body").stop().animate({
            "scrollTop": $target.offset().top - distanceTop
        }, 10, "swing", function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
})

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $("#my__navbar a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if ((refElement.position().top - distanceTop) <= scrollPos && (refElement.position().top - distanceTop + refElement.height()) > scrollPos) {
            $("#my__navbar a").removeClass("active");
            currLink.addClass("active");
            if (refElement.selector !== "#sec1") {
                $("#nav").removeClass('color__index');
                $("#nav").addClass('change__color');
            } else {
                $("#nav").removeClass('change__color');
                $("#nav").addClass('color__index');
            }
        }
        else{
            currLink.removeClass("active");
        }
    });
}



