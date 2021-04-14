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
            console.log("this.hash", this.hash);

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
            console.log(currLink);
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
     * Slick for Banner
     */
    $('.banner, .features__slick, .team__slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });
});

/**
 * Count to for Fun Fact
 */
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

/**
 * Change color navigation,Add/remove class active when scroll down
 */
$(window).on("scroll", function() {
    if($(window).scrollTop() >= 730)
    {
        $("#nav").removeClass('color__index');
        $("#nav").addClass('change__color');
    }
    else {
        // Remove the background property so it comes transparent again (defined in your css)
        $("#nav").removeClass('change__color');
        $("#nav").addClass('color__index');
    }
});
