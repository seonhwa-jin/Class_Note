
// js는 4와동일인데 css가 달라진거
$(document).ready(function(){

  $(".gnbMenu>li").hover(function(){

    $(this).find("a>span").css({"opacity":"1"}).animate({top:"44px"});

    $(this).find(">ul").stop().slideDown();

  },function(){


    $(this).find("a>span").css({"opacity":"0"}).animate({top:"50px"});

    $(this).find(">ul").stop().slideUp();
  });


});

