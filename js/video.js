var video;

window.addEventListener("load", function () {
	console.log("Good job opening the windoww")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
	updateVolumnInfo();
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("pause");
	video.pause();
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("play");
	video.play();
	updateVolumnInfo();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Speed is currently set to", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("Speed is currently set to", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Restarting vidoe ");}
		else {
		video.currentTime += 10;
	}
	console.log("Current time is ", video.currentTime);
});

function updateVolumnInfo() {
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
}

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		this.textContent = "Mute";
		video.muted = false;
	} else {
		this.textContent = "Unmute";
		video.muted = true;
	}
	updateVolumnInfo();
});

document.querySelector("#slider").addEventListener("change", function () {
	video.volume = this.value / 100;
	console.log("Volume	is currently set to", video.volume);
	updateVolumnInfo();
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});