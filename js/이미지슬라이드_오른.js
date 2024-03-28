let film = document.querySelector(".film"); //class로 찾으면 반환값이 배열(여러개일 수 있어서)
//querySelector로 찾음
let pictures = film.getElementsByClassName("picture");
//찾은 picture가 4개니까 pictures는 배열[]이다 / 값이 하나인 변수는 바로 사용해도 된다.

let currentIndex = 1; //보여질 이미지 번호
let imgCnt = pictures.length; //전체 이미지 개수
let time = 2000; //변경시간<몇 초 걸려 바뀔지>
let x = 300; // 좌표값-밀어줄  (위에서 준 사진의 가로길이 500px 값)

setInterval(function(){

// 1<currentIndex> * 500 밀어 
// 2 * 500 밀어 <사진2개니까 사진길이*2>
// 3 * 500 밀어
// 0 * 500 =>첫번째 사진 좌표
let trans = currentIndex * x;

film.style.transform ="translateX(-"+ trans +"px)";
currentIndex++;

//current가 5가되면 current값을 0으로 바꿈
if(currentIndex > imgCnt-1){
currentIndex = 0;
}

},time);