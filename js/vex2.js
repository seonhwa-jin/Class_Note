$(document).ready(function(){

	//이미지 전환효과 함수생성
  let showImg=0;
  let nextImg=0;


  function changeImg(){ /* 일반함수(인자 자리가 공백인) */

    nextImg++;
    ImgCount=$(".mainvisual .visual li").length;

    if(nextImg==ImgCount){ //마지막이미지일때 다시 첫번째 이미지로
      nextImg=0;

    }

    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible"); //(기존)이미지 효과준 클래스 제거
    $(".mainvisual .visual li").eq(nextImg).addClass("imgVisible"); //이미지효과준 클래스 생성(새로 나타나는 이미지)
    $(".mainvisual .btn>span").eq(showImg).removeClass("active");

    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); //선택된 버튼

    showImg=nextImg;

  }

  timer1=setInterval(changeImg,3000);




  //텍스트 전환효과 함수생성
  let showText=0;
  let nextText=0;


  function changeText(){ /* 일반함수(인자 자리가 공백인) */

    nextText++;
    TextCount=$(".mainvisual .visual li").length;

    if(nextText==TextCount){ //마지막이미지일때 다시 첫번째 이미지로
      nextText=0;

    }

    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible"); //(기존)이미지 효과준 클래스 제거
    $(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible"); //이미지효과준 클래스 생성(새로 나타나는 이미지)
    $(".mainvisual .btn>span").eq(showText).removeClass("active");

    $(".mainvisual .btn>span").eq(nextText).addClass("active"); //선택된 버튼

    showText=nextText;

  }

  timer2=setInterval(changeText,3000);





  //상단 버튼 클릭시.. 

  $(".mainvisual .btn>span").click(function(){

    clearInterval(timer1);  //버튼클리시 자동함수 해지
    clearInterval(timer2);


    nextImg=$(this).index();  //버튼클릭시 인덱스필요하다 너무많이 말한거 
    nextText=$(this).index(); //어딜클릭할지 모르기때문에 인덱스 필요~!

    timer1=setInterval(changeImg,3000);
    timer2=setInterval(changeText,3000);







              //상단 버튼 클릭시.. 이미지동작-아직 함수내부에 이어지는중임!
    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible"); 
    $(".mainvisual .visual li").eq(nextImg).addClass("imgVisible"); 
    $(".mainvisual .btn>span").eq(showImg).removeClass("active");
    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); 
    showImg=nextImg;


            //상단 버튼 클릭시.. 텍스트동작-아직 함수내부에 이어지는중임!
    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible"); 
    $(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible"); 
    $(".mainvisual .btn>span").eq(showText).removeClass("active");
    $(".mainvisual .btn>span").eq(nextText).addClass("active"); 
    showText=nextText;



  })





});