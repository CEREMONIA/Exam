document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");

  // 현재 날짜 및 시간 가져오기
  const today = new Date();

  // 현재 년도 및 월 표시
  const yearMonth = document.createElement("div");
  yearMonth.textContent = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
  yearMonth.style.gridColumn = "1 / span 7";
  calendar.appendChild(yearMonth);

  const daysOfWeek = ["수", "목", "금", "토", "일", "월", "화"];

  // 요일 표시
  daysOfWeek.forEach((day, index) => {
    const dayOfWeek = document.createElement("div");
    dayOfWeek.textContent = day;

    // 일요일과 토요일의 색상을 변경
    if (index === 4) {
      dayOfWeek.classList.add("day", "sunday");
    } else if (index === 3) {
      dayOfWeek.classList.add("day", "saturday");
    } else {
      dayOfWeek.classList.add("day");
    }

    calendar.appendChild(dayOfWeek);
  });

  // 월 ~ 일요일까지 날짜 표시
  for (let i = 1; i <= 31; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    // 일요일과 토요일의 색상을 변경
    const currentDay = new Date(today.getFullYear(), today.getMonth(), i);
    const dayOfWeek = currentDay.getDay();
    if (dayOfWeek === 0) {
      day.classList.add("sunday");
    } else if (dayOfWeek === 6) {
      day.classList.add("saturday");
    }

    day.textContent = i;
    calendar.appendChild(day);
  }
});
