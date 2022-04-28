// Live clock Function
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

	let currentTime = hour + ":" + min + ":" + sec + " " + day_night;
	document.getElementById("time").innerHTML = currentTime;
	document.getElementById("day").innerHTML = day;
}
showTime();



// Create new Alaram Function
var alaramCount = 0;  // alaram Count

document.getElementById("save-changes").addEventListener('click', function () {
	let div = document.createElement("div");
	let newTime = document.getElementById("default-picker").value;

	if (newTime) {
		let t = document.createTextNode(newTime);
		div.appendChild(t);
		let newList = document.getElementById("list");
		++alaramCount;
		newList.innerHTML = `<div id="alarm01" class="set-alarm">
	  			<span id="new-alarm" onClick="newAlarm('${newTime}')"> ${newTime}</span>
	  			<div id="settings">
		  			<div>
		  			   <input type="checkbox" id="switch${alaramCount}"class="checkbox slider" onClick= "onToggle('${newTime}')" checked />
        			   <label for="switch${alaramCount}" class="toggle" id="circle">
				   	</div>
					<div id="delete" onClick="del('${newTime}')"> <i class="fa-solid fa-trash-can"></i></div>
				</div>
	  		</div>`+ newList.innerHTML;
	}
	
})



// Delete Alaram Function
function del(text) {
	let alarms = document.querySelectorAll("#alarm01");
	for (let i = 0; i < alarms.length; i++) {
		if (alarms[i].innerText.includes(text)) {
			alarms[i].remove();
			--alaramCount;
		}
	}
}



// Function to Play Alarm
setInterval(playAlarm, 1000);

function playAlarm(alarmHour, alarmMins) {
	let time = new Date();
	let currentHour = time.getHours();
	let currentMins = time.getMinutes();
	var alarmTime = document.querySelectorAll("#alarm01");

	// console.log("currentHour=" + currentHour);
	// console.log("currentMins=" + currentMins);
	// console.log("alarmTime", alarmTime.length);

	for (let i = 0; i < alarmTime.length; i++) {
		let getTime = alarmTime[i].innerText;
		let on_off = document.querySelectorAll("#alarm01")[i].querySelector("input").checked;
		let res = getTime.split(":");
		alarmHour = res[0];
		alarmMins = res[1];

		// console.log("getTime=", getTime, on_off);
		// console.log("res=" + res);
		// console.log("getTime="+getTime);
		// console.log("alarmHour=" + alarmHour);
		// console.log("alarmMins=" + alarmMins);

		if (currentHour == alarmHour && currentMins == alarmMins && on_off) {
			alert("Hey!! It's time - " + alarmHour + ":" + alarmMins);
			onToggle(getTime);
		}
	}
}



// Toggle Button (if toggled then alert alaram else dont) 
var toggled = true;
function onToggle(text) {

	let circle = document.querySelectorAll(".slider");
	let alarms = document.querySelectorAll("#alarm01");

	// console.log("text=", text)
	// console.log(circle);
	// console.log(alarms);

	for (let i = 0; i < alarms.length; i++) {
		if (alarms[i].innerText.includes(text)) {
			if (!toggled) {
				// console.log(alarms);

				circle[i].checked = true;
				toggled = true;

			} else {

				circle[i].checked = false;
				toggled = false;
			}
		}
	}
}