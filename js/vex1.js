$(document).ready(function(){

  ////////////top all menu/////////////



  //햄버거버튼 눌렀을때
  $(".top .all").click(function(){

    $(".menu").stop().slideDown();
    
  });






  //펼쳐진메뉴의 x 버튼 눌렀을때
  $(".top .menu .btn_close").click(function(){

    $(".menu").stop().slideUp("fast");

    
  });










  ////////////main visual image/////////////
  let img=$(".mainvisual ul li");
	let btn=$(".mainvisual .btn>span");	
	let oldidx=0;  //기존이미지
	let idx=0;   //새로 바뀌는 이미지
	let img_n= img.length;  //1,2,3...개수를 세어서 변수에 저장한다.

	//이미지와 버튼이 바뀌는 함수
	function changeImg(idx){  //매개변수가 있는 함수-->idx는 선택되는 이미지

		if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를때...

			btn.eq(oldidx).removeClass("active"); //기존 하단버튼 비활성화->active 클래스를 삭제함
			btn.eq(idx).addClass("active"); //선택된 하단버튼 활성화->active 클래스를 불러냄	
			img.eq(oldidx).stop(true,true).fadeOut(300);  //기존 이미지	사라짐
			img.eq(idx).stop(true,true).fadeIn(300); //선택된 이미지 나타남
			
		}
		oldidx=idx; //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...
	}

	//자동함수 생성
	function changeAuto(){
		idx++;

		//선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
		if(idx>img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
		  idx=0;
		}
		changeImg(idx);

	}

	timer=setInterval(changeAuto,4000);  //4초 간격으로 함수를 자동재생

	/*자동으로 롤링되는 순간 버튼을 클릭할때 동시에 움직여서 충돌이 날수 있음
	->모든 버튼을 클릭할때는 자동으로 이미지가 바뀌는 함수를 잠시 멈추어야 함.*/
	
	//하단버튼 클릭시.....
	btn.click(function(){

		clearInterval(timer); //버튼클릭시 자동함수 해지 ->clearInterval(변수);
    $(".play").hide();
		$(".stop").show();
    
		idx=$(this).index();  //0,1,2...
		changeImg(idx);
		timer=setInterval(changeAuto,4000); //버튼을 클릭안할때는 다시 함수 자동재생

	});

  //Play,Stop 클릭
  $(".play").hide();  //처음에는 Stop버튼은 보이게 하기위해 Play버튼은 숨김

  $(".stop").click(function(){
    clearInterval(timer);
    $(".stop").hide();
		$(".play").show();
  });
  $(".play").click(function(){
    timer=setInterval(changeAuto,4000);
    $(".play").hide();
		$(".stop").show();
  });











	

});