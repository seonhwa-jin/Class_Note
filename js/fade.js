
$(document).ready(function(){

	/* 경로들을 다 변수에 할당 */
	let img=$(".changeimg ul li");	
	let btn=$(".btn ul li");
	let lbtn=$(".side_btn .lbtn");
	let rbtn=$(".side_btn .rbtn");


	/* 동작에 관련된 변수들 할당 */
	let oldidx=0;  //기존이미지
	let idx=0;   //새로 바뀌는 이미지
	let img_n= img.length;  //1,2,3...개수를 세어서 변수에 저장한다.
	


	/* 이미지와 버튼이 바뀌는 함수 */
	function changeImg(idx){  //매개변수가 있는 함수-->idx는 선택되는 이미지

		if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를때...

			
			/* 검은버튼, 주황버튼 컨트롤 */
			btn.eq(oldidx).removeClass("active"); //기존 하단버튼 비활성화->active 클래스를 삭제함
			btn.eq(idx).addClass("active"); //선택된 하단버튼 활성화->active 클래스를 불러냄

			/* 기존이미지, 선택된 이미지 컨트롤 */
			img.eq(oldidx).stop(true,true).fadeOut(300);  //기존 이미지	사라짐
			img.eq(idx).stop(true,true).fadeIn(300); //선택된 이미지 나타남


			/* 선택한 새 이미지 - > 기존 이미지로! */
			oldidx=idx; //선택된 이미지는 다시 기존이미지로 저장되어야 Fade Out...순환이 됨		
		}

	}



	/* 자동함수 생성 */
	//그냥순서대로 1,2,3...이라 인덱스필요x
	function changeAuto(){
			idx++;


			/*선택한 이미지가 마지막일때 다시 처음 이미지부터 시작*/
			if(idx>img_n-1){ 
				//index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
				idx=0;
			}
			changeImg(idx);  //실행하라고하기만한거지 몇초간격 이런건 안건드렸다.
	}

		timer=setInterval(changeAuto,4000); //4초 간격으로 함수를 자동재생
		//setInterval의 짝꿍은 clearInterval. 멈추게하는거
		//clearInterval쓰려면 변수에 담아줘야함. (timer에담았음)

		/*자동으로 롤링되는 순간 버튼을 클릭할때 동시에 움직여서 충돌이 날수 있음
		->[모든 버튼]을 클릭할때는 자동으로 이미지가 바뀌는 함수를 잠시 멈추어야 함.*/





		//하단버튼 클릭시.....
		btn.click(function(){

		clearInterval(timer); //버튼클릭시 자동함수 해지 ->clearInterval(변수);
		idx=$(this).index();  //0,1,2...
		changeImg(idx);
		timer=setInterval(changeAuto,4000); //버튼을 클릭안할때는 다시 함수 자동재생

	});

		//좌우버튼 클릭시.....
		lbtn.click(function(){

			clearInterval(timer);
			idx--;
			if(idx<0){ //선택한 이미지가 첫번째일때 다시 맨뒤부터 다시 시작
				idx=img_n-1;  //총개수 5-1=4(index 0,1,2,3,4)
			}
			changeImg(idx);
			timer=setInterval(changeAuto,4000);

		});

		rbtn.click(function(){

			clearInterval(timer);
			idx++;
			if(idx>img_n-1){ //선택한 이미지가 0,1,2...4 마지막일때 맨처음부터 다시 시작
				idx=0;
			}
			changeImg(idx);	
			timer=setInterval(changeAuto,4000);

		});

	








});

/*
매개 변수란?
함수 외부에서 함수 내부로 데이터를 전달하기 위한 용도로 사용하는 변수
*/