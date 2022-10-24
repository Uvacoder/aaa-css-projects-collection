const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  //move the second arrow
  const secondDegree = (getSecond / 60) * 360;
  second.style.transform = `rotate(${secondDegree}deg)`;

  //move the minute arrow
  const minuteDegree = (getMinute / 60) * 360;
  minute.style.transform = `rotate(${minuteDegree}deg)`;

  //move the hour arrow
  const hourDegree = (getHour / 12) * 360;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);