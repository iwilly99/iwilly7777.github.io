

// mainmenu 밑에 모든 li태그들 선택하기!
$(".mainmenu>li").mouseover(function(){
    // 이벤트가 발생한 li태그 형제를 열어준다!
    $(this).next("ul").stop().slideDown();
    $(this).next("ul").children("li").show();
}).mouseout(function(){
    $(this).next("ul").stop().slideUp(1000);
})

// 이 상태로 실행하면 이벤트가 끝나도 쌓였던 이벤트가 실행됨
// => 이벤트 실행 전에 모든 애니메이션 다 멈추기
// .slideDown과 .slideUp 앞에 .stop() 붙이기