


$(document).ready(function(){

  //주메뉴 오버지 서브박스배경색 나오게 함
  $(".topmenu>li").hover(function(){	
    $(this).find("ul").css({"background":"#f4f3f3"});
  },function(){
    $(this).find("ul").css({"background":"#fff"});
  });


  //주메뉴 오버시 서브메뉴 풀다운 내리고 올리고...
  $(".top_nav").mouseenter(function(){  //주메뉴영역에 오버시 
    $(this).find(".topmenu>li>.smenu").stop().slideDown();
    $(".bg_box").stop().slideDown();
  });

  $("header").mouseleave(function(){  //헤더영역을 나갔을때
    $(this).find(".topmenu>li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });

});