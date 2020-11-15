var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " +video.playbackRate);
	
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime < 5) {
		console.log("Going back to beginning");
		video.currentTime =0;
		video.play();
	} else {
		video.currentTime +=5;
	}
	console.log(video.duration)
	console.log("Current location "+ video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "mute";
		console.log("video is unmute")
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("video is mute")
	}
	//console.log("video mute " + video.muted)
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	video.volume = document.querySelector("#volumeSlider").value/100
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});