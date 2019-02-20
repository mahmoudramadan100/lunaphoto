$(document).ready(function () {


// Nav Mobile
    // $(".nav-mobile").click(function () {
    //     $(".menu").addClass("show");
    //     $(".show").css("display", "block");
    // });

    $(".navbar-toggler-icon").click(function () {
      $(".menu").css({
          marginLeft: "0px"
      });
  })
  $(".fa-times-circle").click(function () {
      $(".menu").css({
          marginLeft: "-300px"
      });
  });


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css({
        "background": "rgba(0, 2, 2, 0.7)",
        "position": "fixed",
        "height": "70px"
      });
    } else {
      $(".navbar").css({
        "background": "rgba(0, 2, 2, 0.3)",
        "height": "100px"
      });
    }
  })

  // Image popups
  $('img').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".list-drop-2").css({
        "margin": "13px 0",
      });
    } else {
      $(".list-drop-2").css({
        "margin": "28px 0",
      });
    }
  });


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".list-drop").css({
        "margin": "13px 0",
      });
    } else {
      $(".list-drop").css({
        "margin": "28px 0",
      });
    }
  });



  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> ..',
      titleSrc: function (item) {
        return item.el.attr('title') + '';
      }
    }
  });
});