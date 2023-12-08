'use strict';

window.onload = function () {
    $(".fade_in_sequence1").animate({
        opacity: '1',
    }, 500, "linear");

    $(".fade_in_sequence2").delay(300).animate({
        opacity: '1',
    }, 750, "linear");

    $(".fade_in_sequence3").delay(400).animate({
        opacity: '1',
    }, 750, "linear");

    $(".fade_in_sequencenth:eq(0)").delay(400).animate({
        opacity: '1',
    }, 750, "linear");

    $(".fade_in_sequencenth:eq(1)").delay(500).animate({
        opacity: '1',
    }, 750, "linear");

    // Learned how to fade in text from 
    // https://stackoverflow.com/questions/11679567/using-css-for-fade-in-effect-on-page-load/16188533#16188533

    // Animation speed learned from
    // http://api.jquery.com/animate/

    // Delay learned from
    // https://api.jquery.com/delay/

    // setTimeout(function () {
    //     $("a:eq(1)").removeClass("nav_transition1");
    // }, 300);

    // setTimeout(function () {
    //     $("a:eq(2)").removeClass("nav_transition2");
    // }, 450);

    // setTimeout(function () {
    //     $("a:eq(3)").removeClass("nav_transition3");
    // }, 600);

    // Remove class learned from
    // https://api.jquery.com/removeclass/

    // Set time out learned from
    // https://stackoverflow.com/questions/11815738/delay-removing-a-class-in-jquery


    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".fade_in_sequencenth:eq(-1), .fade_in_sequencenth:eq(-2), .fade_in_sequencenth:eq(-3), .fade_in_sequencenth:eq(-4), .fade_in_sequencenth:eq(-5)").delay(0).animate({
            opacity: '1',
        }, 750, "linear");
    }

    // Detect if scrolled to the bottom of the page learned from
    // https://stackoverflow.com/questions/4655273/jquery-window-scrolltop-but-no-window-scrollbottom
};

if ($('body.projects').length) {
    var i;
    var $window = $(window);
    var context_top = $(".reflection:eq(1)").offset();
    // var context_top = $(".reflection:eq(1)").offset().top;
    var content_top = [$(".fade_in_sequencenth:eq(0)"),
    $(".fade_in_sequencenth:eq(1)"),
    $(".fade_in_sequencenth:eq(2)"),
    $(".fade_in_sequencenth:eq(3)"),
    $(".fade_in_sequencenth:eq(4)"),
    $(".fade_in_sequencenth:eq(5)"),
    $(".fade_in_sequencenth:eq(6)"),
    $(".fade_in_sequencenth:eq(7)"),
    $(".fade_in_sequencenth:eq(8)"),
    $(".fade_in_sequencenth:eq(9)"),
    $(".fade_in_sequencenth:eq(10)"),
    $(".fade_in_sequencenth:eq(11)"),
    $(".fade_in_sequencenth:eq(12)"),
    $(".fade_in_sequencenth:eq(13)"),
    $(".fade_in_sequencenth:eq(14)"),
    $(".fade_in_sequencenth:eq(15)"),
    $(".fade_in_sequencenth:eq(16)"),
    $(".fade_in_sequencenth:eq(17)"),
    $(".fade_in_sequencenth:eq(18)"),
    $(".fade_in_sequencenth:eq(19)"),
    $(".fade_in_sequencenth:eq(20)"),
    $(".fade_in_sequencenth:eq(21)"),
    $(".fade_in_sequencenth:eq(22)")
];

    $window.scroll(function () {
        if ($(window).width() >= 825) {
            if ($window.scrollTop() >= context_top) {
                $(".project_context").fadeIn();
            } else {
                $(".project_context").fadeOut();
            }
        } else {
            $(".project_context").fadeIn();
        }

        // scrollTop() method learned from
        // https://www.w3schools.com/jquery/css_scrolltop.asp

        // fadeIn (and by extension fadeOut) learned from
        // http://api.jquery.com/fadein/

        // jQuery with Media Query learned from
        // https://www.wiliam.com.au/wiliam-blog/jquery-and-css-media-queries

        for (i = 0; i < document.getElementsByClassName("fade_in_sequencenth").length; i++) {
            if ($window.scrollTop() + $(window).height() >= content_top[i].offset().top) {
                content_top[i].delay(0).animate({
                    opacity: '1',
                }, 750, "linear");
            }
        }
    });


    

    // Running scripts on certain pages learned from
    // https://stackoverflow.com/questions/45551023/how-to-run-a-script-in-certain-pages-only-jquery
}

$(document).ready(function(){
    $(window).scroll(function(){
    var grey_pos = $('.process').offset().top;
    var black_pos = $('.solution').offset().top;
    var white_pos = $('.reflection').offset().top;
    var header_pos = $('header').offset().top;
    var scroll = $(window).scrollTop();

    if (header_pos < grey_pos || white_pos < header_pos) {
        $('header').removeClass('grey_mode');
        $('header').removeClass('black_mode');
      $('header').addClass('white_mode');
      document.getElementById("NK_logo").src = "img/site-wide-assets/blue-logo.svg"
    }
    else if (header_pos > black_pos) {
        $('header').addClass('black_mode');
      $('header').removeClass('white_mode');
      $('header').removeClass('grey_mode');
      document.getElementById("NK_logo").src = "img/site-wide-assets/white-logo.svg"
    }
    else {
        $('header').addClass('grey_mode');
      $('header').removeClass('white_mode');
      $('header').removeClass('black_mode');
      document.getElementById("NK_logo").src = "img/site-wide-assets/blue-logo.svg"
    }
  })
})

function copyEmail() {
     // Copy the text inside the text field
    navigator.clipboard.writeText("nicholas.thko@gmail.com");

  }

function snackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }