$(document).ready(function(){





  //메인메뉴___________________________________________
  $(".mainSubMenu>li").hover(function(){

    $(this).find(">ul").stop().slideDown("fast");


  },function(){

    $(this).find(">ul").stop().slideUp("normal");

  });





  //비쥬얼_____________________________________________________
  let simg=$(".slide ul");
	let simgli=$(".slide ul li");
	let sbtn=$(".slide_btn ul li");
	let snext=$(".side_btn .nex");
	let spre=$(".side_btn .pre");
  let simg_w=simgli.width();   //이미지의 가로너비
	let simg_n=simgli.length;  //이미지의 총개수  
	let soldidx=0;  //기존이미지
	let sindex=0;  //선택된 새이미지


  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex){

    targetX=-(sindex*simg_w); //움직이는 거리(너비)

    simg.animate({left:targetX},600);  //위에서 계산한 거리만큼 움직임
		sbtn.eq(soldidx).removeClass("active");  //기존버튼 비활성화
		sbtn.eq(sindex).addClass("active");  //선택버튼 활성화
		soldidx=sindex;

  };

  //슬라이드 자동함수 생성
  function slideAuto(){

    sindex++;	
		if(sindex==simg_n){ //simg_n은 이미지개수 4, index는 0,1,2,3
			sindex=0;
		}
		slideImg(sindex);  //실행하라고하기만한거지 몇초간격 이런건 안건드렸다.

  };

  auto=setInterval(slideAuto,4000);




  //하단버튼 클릭
  sbtn.click(function(){

		clearInterval(auto);  //버튼클릭시 자동함수 해지  


    $(".play").hide();   //이미지누르면 멈추는데 , stop버튼으로 바뀌게해주는두줄
    $(".stop").show();   //좀 세부적인 디테일을 챙기는것




		sindex=$(this).index();  //0,1,2...
		slideImg(sindex);
		auto=setInterval(slideAuto,4000); //버튼을 클릭안할때는 다시 자동함수 실행

	});





  //좌우버튼 클릭
  snext.click(function(){

		clearInterval(auto);


    $(".play").hide();  
    $(".stop").show(); 

    sindex++;
    if(sindex>simg_n-1){  //마지막이미지까지 오면 다시 첫번째이미지로
      sindex=0;
    }
		slideImg(sindex);
		auto=setInterval(slideAuto,4000); 

	});

  spre.click(function(){

		clearInterval(auto);

    $(".play").hide();  
    $(".stop").show(); 

    sindex--;
    if(sindex<0){  //첫번째이미지까지 오면 다시 맨 마지막 이미지부터 다시..
      sindex=simg_n-1;  //총개수4 (이미지4컷)에서 1을 뺀 3->index=3(0,1,2,3)
    }
		slideImg(sindex);
		auto=setInterval(slideAuto,4000); 

	});



  
  //play,stop버튼


  $(".play").hide();  //처음에는 stop버튼을 보이게 하기위해 play버튼은 숨김

  $(".stop").click(function(){
    clearInterval(auto);
    $(".stop").hide();
    $(".play").show();
  });

  $(".play").click(function(){
    auto=setInterval(slideAuto,4000); 
    $(".play").hide();
    $(".stop").show();
  });





//메뉴위 광고
$(".tab li").click(function(){

  thval=$(this).index();
  thnum=+60*thval; //세로폭 60px씩 증가됨

  $(".tab-header .tab-highlight").animate({top:thnum});
  $(".tab li a").css("color","#d6d6d6"); //탭의 모든 글자색
  $(this).find(">a").css("color","#fff"); //선택된 탭의 글자색


  $(".panel li").hide(); //기존의 보여진 내용 숨기기
  $($(this).find(">a").attr("href")).fadeIn();  //새로 선택된 내용 href연결된내용 보여주기
  
});





  //버튼4개 왼->오
  //btn1
  $(".candy1").hover(function(){
    $(".candy1 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	},function(){
    $(".candy1 li:first-child").stop(true,true).animate({marginLeft:"-200px"},250);
  });

  //btn2
  $(".candy2").hover(function(){
    $(".candy2 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	},function(){
    $(".candy2 li:first-child").stop(true,true).animate({marginLeft:"-200px"},250);
  });

  //btn3
  $(".candy3").hover(function(){
    $(".candy3 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	},function(){
    $(".candy3 li:first-child").stop(true,true).animate({marginLeft:"-200px"},250);
  });

  //btn4
  $(".candy4").hover(function(){
    $(".candy4 li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	},function(){
    $(".candy4 li:first-child").stop(true,true).animate({marginLeft:"-200px"},250);
  });





//소스 설명부분
$(".panelSauce>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용 숨기기

  $(".tabSauce>li").click(function(){

    $(".tabSauce>li").removeClass("selected2");  //기존 선택된 셀렉티드클래스 삭제
    $(this).addClass("selected2"); //새로 선택된 셀렉티드 클래스 생성
    $(".panelSauce>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).show(); //새로 선택된 내용 href연결된내용 보여주기

   

  })
  

  //
  // $(".thumbs a").click(function(){
    
  //      let num=$(this).index(); //a에 인덱스를 매겨라
  //      $("#largeImg img").attr({"src":"image/bg"+num+".jpg"});
  //      return false;
  //    });




});
