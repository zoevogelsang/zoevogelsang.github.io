
var TOTAL = 19;
var index;
var descriptions = [
"\"Sam and Enid\", oil on canvas, 2021",
"\"Zardulu\", oil on canvas, 2020",
"\"Femmes Fatales\", oil on canvas, 2019",
"\"EJ's\", acrylic on canvas, 2018", 
"\"Ratnum Opus\", oil on canvas, 2020", 
"\"untitled\", oil on canvas, 2020", 
"\"green landscape\", oil on canvas, 2019", 
"\"portrait of Lily\", graphite and ink, 2018", 
"\"portrait of two boys\", acrylic on canvas, 2018", 
"\"Gustie in the art room\", acrylic on canvas, 2017", 
"\"portrait of Sam\", graphite and ink, 2018", 
"\"still life with eggs\", oil on canvas, 2019",
"\"self portrait in sweatpants\", acrylic on canvas, 2017",
"\"self portrait\", oil on canvas, 2019", 
"\"untitled\", graphite and ink, 2018",
"\"She Means Business\", acrylic on canvas, 2017",
"\"Jonathan in the art room\", acrylic on canvas, 2017",
"\"untitled\", ink, 2018",
"\"self portrait\", acrylic on canvas, 2017"
]


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
	if(index == 1) {
		$("#prev-btn").css("display", "none"); 
		$("#slash").css("display", "none"); 
	}
	else{
		$("#prev-btn").fadeIn(); 
		$("#slash").fadeIn(); 
	}
	if(index == TOTAL) 
		{$("#next-btn").css("display", "none"); 
		$("#slash").css("display", "none"); 
	}
	else{
		$("#next-btn").fadeIn(); 
		$("#slash").fadeIn(); 
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
