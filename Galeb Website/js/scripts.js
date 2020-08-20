$(document).ready(function(){
    $('.menu-toggle').on('click', function(){   // navigation bar
        $('.nav').toggleClass('showing');
    });

    $('.post-wrapper').slick({  //caroseul
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });


      //navgiation active link -  not working properly
    $(document).on('click', 'header ul li', function(){
        $(this).addClass("active").siblings().removeClass('active');
     }); 


     //footer included into code
     $(function(){
      $("#includedFooter").load("Repeatedhtml/footer.html");
    });
  
    //button included into code
     $(function(){
      $("#includedContent").load("Repeatedhtml/etestbutton.html");
    });

           /*
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
            */
});



