

$(document).ready(function(){

  $(".gnbMenu>li").hover(function(){

    $(this).find("a>span").css({"opacity":"1"}).animate({top:"44px"});

    $(this).find(">ul").stop().slideDown();

  },function(){


    $(this).find("a>span").css({"opacity":"0"}).animate({top:"50px"});

    $(this).find(">ul").stop().slideUp();
  });


});
