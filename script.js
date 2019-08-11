
var TOTAL = 10;
var index;
var descriptions = [
"1",
"2", 
"3", 
"4", 
"5", 
"6", 
"7", 
"8", 
"9", 
"10"]


function loadGallery() {
	for(var i = 1; i <= TOTAL; i++){
		var work = document.createElement("img");
		work.src = "img/portfolio/" + i + ".jpg";
		work.className = "gallery-img";
		work.id = "img" + i;
		work.setAttribute("num", i);
		work.addEventListener("click", function(){ viewImage(this) });
		var src = document.getElementById("gallery");
		src.appendChild(work);
		$(".gallery-img").fadeIn();
	}
}


function viewImage(img) {
	index = img.getAttribute("num");
	var imageLarge = document.getElementById("image-large");
	imageLarge.src = img.src;
	imageLarge.setAttribute("num", index);

	updateCounter();
	updateDescription();

	$("#gallery").fadeOut();
	$("#close-btn").fadeIn();
	$("#image-large").fadeIn();
	if(index == 1) 
		{$("#prev-btn").css("display", "none"); 
		$("#slash").css("display", "none"); 
	}
	if(index == TOTAL) 
		{$("#next-btn").css("display", "none"); 
		$("#slash").css("display", "none"); 
	}
	$("#toggle").fadeIn();
	$("#counter").fadeIn();
	$("#description").fadeIn();
}


function toggleRight(){
	imageLarge = document.getElementById("image-large");
	if( index == TOTAL) return;
	index++;

	$("#image-large").animate(
		{
    		left: [ "-=50", "swing" ],
    		opacity: [ 0, "linear" ]
		}, 100 
	);
	$("#image-large").animate(
		{
    		left: [ "+=100", "swing" ]
		}, 100 
	);
	$("#image-large").animate(
		{
    		left: [ "-=50", "swing" ],
    		opacity: [ 1, "linear" ]
		}, 100 
	);

	updateCounter();
	updateDescription();
	if(index == TOTAL) 
		{$("#next-btn").fadeOut(); 
		$("#slash").fadeOut(); 
	}
	if(index == 2) 
		{$("#prev-btn").fadeIn(); 
		$("#slash").fadeIn(); 
	}
	var nextImg = document.getElementById("img"+ index);
	imageLarge.src = nextImg.src;
}



function toggleLeft(img){
	imageLarge = document.getElementById("image-large");
	if (index == 1) return;
	index--;

	$("#image-large").animate(
		{
    		left: [ "+=50", "swing" ],
    		opacity: [ 0, "linear" ]
		}, 100 
	);

	$("#image-large").animate(
		{
    		left: [ "-=100", "swing" ]
		}, 100 
	);

	$("#image-large").animate(
		{
    		left: [ "+=50", "swing" ],
    		opacity: [ 1, "linear" ]
		}, 100 
	);

	updateCounter();
	updateDescription();
	if(index == 1) 
		{$("#prev-btn").fadeOut(); 
		$("#slash").fadeOut(); 
	}
	if(index == TOTAL-1) 
		{$("#next-btn").fadeIn(); 
		$("#slash").fadeIn(); 
	}
	var nextImg = document.getElementById("img"+ index);
	imageLarge.src = nextImg.src;
	
}

function updateDescription() {
	var d=document.getElementById("description");
	d.innerText = descriptions[index-1];
}

function updateCounter() {
	var counter = document.getElementById("counter");
	counter.innerText = "("+index+" of "+TOTAL+")";
}

function closeImageView() {
	$("#close-btn").fadeOut();
	$("#toggle").fadeOut();
	$("#counter").fadeOut();
	$("#image-large").fadeOut();
	$("#description").fadeOut();
	$("#gallery").fadeIn();
}
