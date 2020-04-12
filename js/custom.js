$(function(){
    /* preloader begin */
    $(window).on('load', function(event) {
        $('.preloader').delay(1000).fadeOut(500);
    }); 
  /* preloader end */
    /* sticky menu start*/
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".menu_bar").removeClass("sticky");
        } else{
            $(".menu_bar").addClass("sticky");
        }
      });
    /* sticky menu end */
    /* mobile menu start */
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    /* mobile menu end */
    /* slider start*/
    $(".active_slider").slick({
        arrows : false,
        dots : true,
        autoplay : true,
        infinite : true
    });
    /* slider end*/

    /* video popup start*/
    $('.video').venobox({
        spinColor : '#1e1b3f',
        closeBackground : '#1e1b3f'
    });
    /* video popup end */

    /* portfolio gallery start */
    var mixer = mixitup('.portfolio_images');
    /* portfolio gallery end */

    /* testimonial slide start */
    $(".testimonial_wrap").slick({
        arrows : false,
        dots : true,
        autoplay : true,
        infinite : true
    });
    /* testimonial slide end */
    /* back to top button begin */
    //hide and show button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back_to_top').fadeIn(200)
        } else{
            $('.back_to_top').fadeOut(200)
        }
    });
    //animate scroll to top
    $('.back_to_top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    /* back to top button end */
});