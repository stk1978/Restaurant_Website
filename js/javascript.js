

 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 1);
 });




var owl = $('.owl-carousel');
owl.owlCarousel({
    // items:2,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    responsiveClass:true,
   
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
});



         
  $("#datepicker").datepicker();



$('#scrollDefaultExample').timepicker({ 
  'scrollDefault': 'now' ,
  scrollInput : false
  });




  
$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});




        $(window).scroll(function() {
            if ($(document).scrollTop() > 1) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });







