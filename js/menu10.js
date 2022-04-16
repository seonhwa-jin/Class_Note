$(document).ready(function(){
  $(".menu>li").mouseenter(function(){

    $(".sub").hide(); //기존에 보여지는서브메뉴 안보이게.(겹치지 않게), this안쓰고 처리시점 나눈거
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown();

  });

  $("nav").mouseleave(function(){

    $(this).find(".sub").stop().slideUp();
    $(".bg_box").stop().slideUp();

  });


});