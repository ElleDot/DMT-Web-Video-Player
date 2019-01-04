function openNav() {
	navOverlay.style.width = "100%";
}
function closeNav() {
	navOverlay.style.width = "0%";
}
function goFullscreen() {
	fullscreenNavOverlay.style.width = "100%";
	videoPlayer.pause();
	playButton.innerHTML = "&#9658; Play";
	var currentSecond = videoPlayer.currentTime;
	fullscreenVideoPlayer.currentTime = currentSecond;
	fullscreenVideoPlayer.play();
}
function closeFullscreen() {
	fullscreenNavOverlay.style.width = "0%";
	fullscreenVideoPlayer.pause();
	var currentSecond = fullscreenVideoPlayer.currentTime;
	videoPlayer.currentTime = currentSecond;
}
function fullscreenCloseNav() {
	fullscreenNavOverlay.style.width = "0%";
}
function restartVideo() {
	videoPlayer.currentTime = 0;
	navOverlay.style.width = "0%";
}
function chapterOneSkip() {
	videoPlayer.currentTime = 0;
	navOverlay.style.width = "0%";
}
function chapterTwoSkip() {
	videoPlayer.currentTime = 35;
	navOverlay.style.width = "0%";
}
function chapterThreeSkip() {
	videoPlayer.currentTime = 76;
	navOverlay.style.width = "0%";
}				
function chapterFourSkip() {
	videoPlayer.currentTime = 157;
	navOverlay.style.width = "0%";
}		
function creditsSkip() {
	videoPlayer.currentTime = 221;
	navOverlay.style.width = "0%";
}

function playPauseFunction() {
	if (videoPlayer.paused) {
		videoPlayer.play();
		playButton.innerHTML = "&#10074&#10074; Pause";
	} else {
		videoPlayer.pause();
		playButton.innerHTML = "&#9658; Play";
	}	
}
function fullscreenPlayPauseFunction() {
	if (fullscreenVideoPlayer.paused) {
		fullscreenVideoPlayer.play();
		fullscreenPlayButton.innerHTML = "&#10074&#10074;";
	} else {
		fullscreenVideoPlayer.pause();
		fullscreenPlayButton.innerHTML = "&#9658;";
	}	
}			
function muteUnmuteFunction() {
	if (videoPlayer.muted) {
		videoPlayer.muted = false;
		muteButton.innerHTML = "&#128263; Mute Audio";
	} else {
		videoPlayer.muted = true;
		muteButton.innerHTML = "&#128266; Unmute Audio";
	}
}