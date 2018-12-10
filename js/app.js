$(document).ready(function () {
	var $video = $(".video-container"),
		videoTag = $video.find("video"),
		timeLeft = 10;

	[].forEach.call(videoTag, function (item,index) {
		item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
		item.addEventListener('mouseout', hideVideo.bind(item,index), false);
	});


	function hoverVideo(index, e) {
		var isPlaying = videoTag[index].currentTime > 0 && !videoTag[index].paused && !videoTag[index].ended
			&& videoTag[index].readyState > 2;

		if (!isPlaying) {
			videoTag[index].play();
		}
	}

	function hideVideo(index, e) {
		videoTag[index].pause();
		videoTag[index].currentTime = 0;
	}

});