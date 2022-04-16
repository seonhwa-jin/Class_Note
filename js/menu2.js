//css주석 먼저확인하기


$(document).ready(function(){

  $(".gnbMenu>li").hover(function(){

    $(this).find(">ul").stop().slideDown();

  },function(){
    $(this).find(">ul").stop().slideUp();
  });


});



/* stop(): 사용자의 중복반응 제거
->현재 실행중인 애니메이션을 정지시키고, 다음 애니메이션을 진행
사용자의 마우스의 중복(빠른)반응 때문에 애니메이션 겹침현상이 생길때가 있어서 부드럽게 처리를 하기 위해 사용함


기본값 : stop() == stop (false,false)
        stop(true,true)
        ->중간과정이 발생하는 애니메이셔 효과의 모든 곳에 적용
*/

