$(document).ready(function(){

  //이미지 src바꾸는게 있는데 한번까진 봐줘도 여러개하면 곤란한거
  //여러가지 이미지를 바꾸는 상황일땐 이제 이방법을 사용


  $(".gnb li").hover(function(){

    //호버했을때 function
    let num=$(this).index()+1;  //파일명 숫자바꾸기위해 인덱스사용
    $(this).find("a img").attr({"src":"image/menuover_0"+num+".jpg"})     
    //.gnb li a img{}해야하는데 li까지만 this라서 a img는 find라는거 사용(★)
    //attr후에 { } 붙이면서 css방식으로 쓰겠다고하는거

  },function(){

    //호버아웃했을때 function(위와 거의동일 파일명만 바꾸는거)
    let num=$(this).index()+1;  //파일명 숫자바꾸기위해 인덱스사용
    $(this).find("a img").attr({"src":"image/menu_0"+num+".jpg"}) 

  })

  /* 
    지역변수와 전역변수
    let 변수이름=어쩌구; ->지역변수 선언 (해당하는 문장에서만 변수를 사용할 수 있다.)
                    그런데여기서 let빼면 전역변수가 됨

    (그냥 덜렁) 변수이름 =어쩌구;-> 전역변수 선언(전체 문장에 이 변수를 사용할 수 있다.)
  */




		
});