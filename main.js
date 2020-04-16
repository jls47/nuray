document.addEventListener("click", function(event){
	event.preventDefault();
	var targeted = event.target.id;
	console.log(targeted);
	if(targeted == "math"){
		document.getElementById("videoBody").innerHTML += '<iframe width="420" height="315" src="https://www.youtube.com/watch?v=mlwBm4Kp_gM" id = "addedVid"></iframe>';
	}else if (targeted == "science"){
		document.getElementById("videoBody").innerHTML += '<iframe width="420" height="315" src="https://www.youtube.com/watch?v=3TBF_p-Ytp8" id = "addedVid"></iframe>';
	}else if (targeted == "english"){
		document.getElementById("videoBody").innerHTML += '<iframe width="420" height="315" src="https://www.youtube.com/watch?v=uE7Uz8-MRw8" id = "addedVid"></iframe>';
	}

})