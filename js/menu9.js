//사진참조수정

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

  $("#header").mouseleave(function(){  //헤더영역을 나갔을때
    $(this).find(".topmenu>li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });


  //주메뉴 오버시 서브bgbox의 왼쪽이미지 변경
  $(".topmenu>li").hover(function(){
    old=0;  //처음에 보여지는 이미지  //[호버문장]에선 let안쓰는게 더 편함
    val=$(this).index();  //마우스올린곳의 인덱스를 받음


    $(".topimg li").eq(old).stop(true,true).hide("slow"); //기존 이미지는 숨기기
    $(".topimg li").eq(val).stop(true,true).hide("slow"); //새이미지 보이기
    old=val; //위에서 새로 바뀐이미지는 다시 기존이미지에 저장(순환용)
  },function(){

    $(".topimg li").stop(true,true).hide();

  })


});