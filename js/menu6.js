//풀다운은 li에 호버x , ul에 호버임




$(document).ready(function(){

  $(".gnbMenu").mouseenter(function(){ //주메뉴영역에오버시
    $(this).find("li>.smenu").stop().slideDown(500,"easeOutElastic");  //탄력함수 써봤는데 html밑부분에 강제스크립트 꼭 넣어야함!

  });

  $("header").mouseleave(function(){ //헤더영역을 나갔을때
    $(this).find("li>.smenu").stop().slideUp(500);

  });



});