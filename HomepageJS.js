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
	videoPlayer.currentTime = 10;
	navOverlay.style.width = "0%";
}
function chapterThreeSkip() {
	videoPlayer.currentTime = 20;
	navOverlay.style.width = "0%";
}				
function chapterFourSkip() {
	videoPlayer.currentTime = 30;
	navOverlay.style.width = "0%";
}		
function creditsSkip() {
	videoPlayer.currentTime = 40;
	navOverlay.style.width = "0%";
}

//function goFullscreen() {
	//var currentSecond = videoPlayer.currentTime;
		//videoPlayer.currentTime = 20;
//}