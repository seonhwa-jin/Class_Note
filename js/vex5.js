$(document).ready(function () {

  let img_w = $(".slide ul li").width(); //이미지의 가로너비
  let img_n = $(".slide ul li").length; //이미지의 총개수  
  let oldidx = 0; //기존이미지
  let index = 0; //선택된 새이미지

  $(".slide ul li:last").prependTo(".slide ul");
  //갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치	
  $(".slide ul").css({
    left: -img_w
  });
  //갤러리를 하나의 이미지 가로길이 만큼 왼쪽으로 배치


  //index번째 비주얼이미지 출력하는 함수생성
  function slideImg(index, m) { //m은 prev와 next를 판단 

    if (m == 0) { //prev눌렀을때
      //이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치	
      $(".slide ul").stop(true, true).animate({
        left: "+=" + img_w + "px"
      }, 600, "easeOutCubic", function () {
        $(".slide ul li:last").prependTo(".slide ul");
        $(".slide ul").css({
          left: -img_w
        }); //최종목적지
      });

    } else { //next눌렀을때
      //다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
      $(".slide ul").stop(true, true).animate({
        left: "-=" + img_w + "px"
      }, 600, "easeOutCubic", function () {
        $(".slide ul li:first").appendTo(".slide ul");
        $(".slide ul").css({
          left: -img_w
        }); //최종목적지
      });

    }
    oldidx = index;
  }


  //슬라이드 자동함수 생성
  function slideAuto() {
    index++;
    if (index == img_n) {
      index = 0;
    }
    slideImg(index, 1);
  }

  auto = setInterval(slideAuto, 4000);


  //이전버튼 클릭
  $(".pre").click(function () {

    clearInterval(auto);

    index--;
    if (index < 0) {
      index = img_n - 1;
    }
    slideImg(index, 0);

    auto = setInterval(slideAuto, 4000);

  });


  //다음버튼 클릭
  $(".nex").click(function () {

    clearInterval(auto);

    index++;
    if (index >= img_n) {
      index = 0;
    }
    slideImg(index, 1);

    auto = setInterval(slideAuto, 4000);

  });


});