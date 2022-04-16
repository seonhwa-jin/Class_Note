
$(document).ready(function(){

  $(".gnbMenu").mouseenter(function(){ //주메뉴영역에오버시
    $(this).find("li>.smenu").stop().slideDown(500);  
    $(".bg_box").stop().slideDown();  

  });

  $("header").mouseleave(function(){ //헤더영역을 나갔을때
    $(this).find("li>.smenu").stop().slideUp(500);
    $(".bg_box").stop().slideUp();  
  });



});








//7번까지가 기본형메뉴들이고 이 뒤로는 이제 응용형