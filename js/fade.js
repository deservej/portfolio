 $(document).ready(function(){
    $('.fade-1').fadeIn(1400);
  });

  $(document).ready(function(){
    $(window).scroll(function(){
      $('.fade-2').each(function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_window > bottom_of_object/1.3) {
          $(this).animate({'opacity':'1'},1600);
        }
      });
    });
  });