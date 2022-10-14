const newYear = "1 jan 2023";

function countDown() {
    const newYearsDate = new Date(newYear);
    const today = new Date();

    const gap = (newYearsDate - today) / 1000;

    const seconds = Math.floor(gap % 60);

    const minutes = Math.floor(gap / 60) % 60;

    const hours = Math.floor(gap / 3600) % 24;

    const days = Math.floor(gap / 3600 / 24);

    if (gap <= 0) {
        clearInterval(myInterval);
        document.getElementById("time").style.display = "none";
        document.getElementById("title").innerText = "Happy New Year";
    } else {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}
const myInterval = setInterval(countDown, 1000);