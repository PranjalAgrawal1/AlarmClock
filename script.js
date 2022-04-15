setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[time.getDay()];
    let day_night = "AM";

    if (hour > 12) {
        hour = hour - 12;
        day_night = "PM";
    }
    if (hour == 0) {
        hour = 12;
        day_night = "AM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    let currentTime = hour + ":" + min + ":" + sec + day_night;
    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("day").innerHTML = day;
}
showTime();