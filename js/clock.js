const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// 메모리 지역변수에 저장되고 날라가는데 이 함수를 쓰면 지역변수 상관없이 글로벌로 저장됨
// setInterval 함수가 끝나도 계속 실행됨
// setInterval을 끝내려면 cleanInterval를 사용한다 

