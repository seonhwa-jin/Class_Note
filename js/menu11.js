$(document).ready(function(){

  $(".allmenu h3").click(function(){

    $(this).toggleClass("mclose");  //addClass+removeClass (화살표방향꺾이는 이미지쓰는거)
    $(".allmenu div").slideToggle("slow"); //slide up+down

  })


});