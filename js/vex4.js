$(document).ready(function(){
	
	let simg=$(".slide ul");
	let simgli=$(".slide ul li");
	let sbtn=$(".slide_btn ul li");
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

  auto=setInterval(slideAuto,2000);




  //하단버튼 클릭
  sbtn.click(function(){

		clearInterval(auto);  //버튼클릭시 자동함수 해지  

		sindex=$(this).index();  //0,1,2...
		slideImg(sindex);
		auto=setInterval(slideAuto,2000); //버튼을 클릭안할때는 다시 자동함수 실행

	});




});