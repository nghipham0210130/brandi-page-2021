/**
 * Show inner__collapse when click Hamburger button
 */
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

$(function() {
    var navHeight = $(".navbar").height();

    /**
     * Add smooth scrolling to all links
     */
    $(".nav__link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior

            var refElement = $($(this).attr("href"));
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $("a").each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');



            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 500, 'swing', function () {
                $(document).on("scroll", onScroll);
            });
        }
        //End if
    });

    /**
     * Event move to new section
     */
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $("#my__navbar a").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if ((refElement.position().top - navHeight) <= scrollPos && (refElement.position().top - navHeight + refElement.height()) > scrollPos) {
                $("#my__navbar a").removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

    /**
     * Slick
     */
    $('.banner__background, .features__slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });

    $('.team__slick').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 979,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

/**
 * Function when window load resize scroll
 */
$(window).on("load resize",function() {
    //Count to for Fun Fact
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
        }, 5);
    }

    for (var j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});

/**
 * Change color navigation,Add/remove class active when scroll down
 */
$(window).on("scroll", function() {
    if($(window).scrollTop() >= 100)
    {
        $("#nav").removeClass('navbar--color-index');
        $("#nav").addClass('navbar--change-color');
    }
    else {
        // Remove the background property so it comes transparent again (defined in your css)
        $("#nav").removeClass('navbar--change-color');
        $("#nav").addClass('navbar--color-index');
    }
});
