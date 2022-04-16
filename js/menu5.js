//html주석 확인하기



$(document).ready(function(){

 /*  $(".gnbMenu>li").hover(function(){

    $(this).find(">ul").stop().slideDown();
    $(".bg_box").stop().slideDown();

  },function(){
    $(this).find(">ul").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });  
  이거 메뉴2랑 동일한데 똑같이 동작하지만 밑에로 공부해보는것
  펑션내용은 아래에도 복붙할꺼임 위치지정만 달라지는거 공부*/



  //마우스오버와 아웃의영역을 다르게 할때..
  $(".gnbMenu>li").mouseenter(function(){

    $(".gnbMenu>li ul").hide(); //기존에 보여지는서브메뉴 안보이게.(겹치지 않게), this안쓰고 처리시점 나눈거
    $(this).find(">ul").stop().slideDown();
    $(".bg_box").stop().slideDown();

  });

  $("header").mouseleave(function(){
    $(".menu>li ul").hide(); //이 줄 필요한거 맞는지 확인해보고 필없으면지우기
    $(this).find(">ul").stop().slideUp();
    $(".bg_box").stop().slideUp();

  });


});