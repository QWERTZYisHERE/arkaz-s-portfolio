$(document).ready(function(){

    var contents = $("body").html();
  
    $(window).scroll(function() {   
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           $("body").append(contents);
       }
    });
  
})