function updateClock() {
  var now = new Date();

  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // 시간, 분, 초가 한 자리 숫자인 경우 앞에 0 추가
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  // HTML 페이지에 시계 정보 업데이트
  document.getElementById("clock").innerHTML = timeString;
}

// 1초마다 시계 업데이트
setInterval(updateClock, 1000);

// 페이지 로딩 시에도 시계 업데이트
updateClock();
