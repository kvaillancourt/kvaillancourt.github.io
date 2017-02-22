///////////////////////////////
// One page Smooth Scrolling
///////////////////////////////
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

    var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById('myModal2');
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() { 
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

    
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(document).ready(function() {

    // static navigationbar
    var changeStyle = $('#navigation-bar');

    function scroll() {
        if ($(window).scrollTop() > 640) {
            changeStyle.addClass('navbar-fixed-top');
            changeStyle.addClass('one-page-nav');
        } else {
            changeStyle.removeClass('navbar-fixed-top');
            changeStyle.removeClass('one-page-nav');
        }
    }

    document.onscroll = scroll;

    $('.testimonial-owl').owlCarousel({
        items: 1
    });
    

    var windowWidth = 0; 
      if (self.innerWidth) {
        windowWidth = self.innerWidth;
      }

      if (document.documentElement && document.documentElement.clientWidth) {
        windowWidth = document.documentElement.clientWidth;
      }

      if (document.body) {
        windowWidth = document.body.clientWidth;
      }
      //320 mobile and 1440 for big screen 

    // console.log(windowWidth); 
    var owlItems = 1; 
    if (windowWidth > 400) {
        owlItems++; 
    }
    if (windowWidth > 700) {
        owlItems++;
    }
    if (windowWidth > 900) {
        owlItems++; 
    }
 

    $('.add-owl').owlCarousel({
        items: owlItems,
        nav: true,
        navText: false,
        dots: false,
        loop: true
    });

    $('.twitter-owl').owlCarousel({
        items: 1,  
        nav: true,
        navText: false,
        dots: false,
        loop: true
    });

});