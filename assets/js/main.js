$(document).ready(function () {
    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".btn-menu").on("click", function () {
        $(".header__bottom").toggleClass("open");
    })

    $(".btn--icon-down").on("click", function () {
        $(this).toggleClass("open");//add class
        $(this).next().toggle();//toggle to open and close
    })
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#day").html(days);
        $("#hour").html(hours);
        $("#minute").html(minutes);
        $("#second").html(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $(".countdown").html("");
        }
    }, 1000);


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true
    });
    $(".zoomProductDetail").ezPlus();
    $(".js-video-button").modalVideo({
        youtube: {
            controls: 0,
            nocookie: true
        }
    });
    $(".dropdown-sale").on("click", function (e) {
        e.stopPropagation();
    });

});

var getNum = 0;
function btnInc() {
    getNum = getNum + 1;
    document.getElementById("num").value = getNum;
    console.log(getNum);
}
function btnDec() {
    if (getNum > 0) {
        getNum = getNum - 1;
        document.getElementById("num").value = getNum;
    }
    else {
        document.getElementById("num").value = 0
    }
}
