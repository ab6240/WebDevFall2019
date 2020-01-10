var gifs1 = document.querySelectorAll(".performance");
for(var i = 0; i < gifs1.length; i++) {
    var gif = gifs1[i];
    gif.onmouseover = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".gif";
    }
    gif.onmouseleave = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".png";
    }
}

var gifs2 = document.querySelectorAll(".installation");
for(var i = 0; i < gifs2.length; i++) {
    var gif = gifs2[i];
    gif.onmouseover = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".gif";
    }
    gif.onmouseleave = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".png";
    }
}

var gifs3 = document.querySelectorAll(".mv");
for(var i = 0; i < gifs3.length; i++) {
    var gif = gifs3[i];
    gif.onmouseover = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".gif";
    }
    gif.onmouseleave = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".png";
    }
}

var gifs4 = document.querySelectorAll(".film");
for(var i = 0; i < gifs4.length; i++) {
    var gif = gifs4[i];
    gif.onmouseover = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".gif";
    }
    gif.onmouseleave = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".png";
    }
}

var gifs5 = document.querySelectorAll(".digital");
for(var i = 0; i < gifs5.length; i++) {
    var gif = gifs5[i];
    gif.onmouseover = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".gif";
    }
    gif.onmouseleave = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".png";
    }
}

var gifs6 = document.querySelectorAll(".analog");
for(var i = 0; i < gifs6.length; i++) {
    var gif = gifs6[i];
    gif.onmouseover = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".gif";
    }
    gif.onmouseleave = function() {
        var src = this.src;
        this.src = src.substr(0, src.lastIndexOf(".")) + ".png";
    }
}

$("nav ul li a:not(:only-child)").click(function(e) {
	$(this).siblings(".dropdown").toggle();
	console.log('click!');

	$(".dropdown").not($(this).siblings()).hide();
	e.stopPropagation();
});

$("html").click(function() {
	$(".dropdown").hide();
});


$(".performance").click(function() {
	$('#filterID').empty();
	var visIndex = 3;
	$('.contentBox').each(function() {
		console.log('iterating1');
		var search = false;
		var $this = $(this);
		$this.children("img").each(function(){
			console.log('iterating2');
			if ($(this).hasClass("performance")){
				search = true;
				console.log('Search Successful');
			};
		});

		if (search == false){
			$(this).hide();
			console.log('result : false');
		}else{
			$(this).show();
			console.log('result : true');
			$(this).css("margin-top", "100px");
			$(this).css("grid-row-start", visIndex);
			visIndex++;
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : performance | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	$('<p> <img class="imagecard" src="assets/imagetag/performance/performance.gif" width="250px"><p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});

$(".installation").click(function() {
	$('#filterID').empty();
	var visIndex = 3;
	$('.contentBox').each(function() {
		var search = false;
		var $this = $(this);
		$this.children("img").each(function(){
			if ($(this).hasClass("installation")){
				search = true;
				console.log('Search Successful');
			};
		});

		if (search == false){
			$(this).hide();
		}else{
			$(this).show();
			$(this).css("margin-top", "100px");
			$(this).css("grid-row-start", visIndex);
			visIndex++;
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : installation | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	$('<p> <img class="imagecard" src="assets/imagetag/installation/installation.gif" width="250px"><p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});

$(".mv").click(function() {
	$('#filterID').empty();
	var visIndex = 3;
	$('.contentBox').each(function() {
		var search = false;
		var $this = $(this);
		$this.children("img").each(function(){
			if ($(this).hasClass("mv")){
				search = true;
				console.log('Search Successful');
			};
		});

		if (search == false){
			$(this).hide();
		}else{
			$(this).show();
			$(this).css("margin-top", "100px");
			$(this).css("grid-row-start", visIndex);
			visIndex++;
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : music video | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	$('<p> <img class="imagecard" src="assets/imagetag/mv/mv.gif" width="250px"><p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});

$(".film").click(function() {
	$('#filterID').empty();
	var visIndex = 3;
	$('.contentBox').each(function() {
		var search = false;
		var $this = $(this);
		$this.children("img").each(function(){
			if ($(this).hasClass("film")){
				search = true;
				console.log('Search Successful');
			};
		});

		if (search == false){
			$(this).hide();
		}else{
			$(this).show();
			$(this).css("margin-top", "100px");
			$(this).css("grid-row-start", visIndex);
			visIndex++;
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : film | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	$('<p> <img class="imagecard" src="assets/imagetag/film/film.gif" width="250px"><p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});

$(".analog").click(function() {
	$('#filterID').empty();
	var visIndex = 3;
	$('.contentBox').each(function() {
		var search = false;
		var $this = $(this);
		$this.children("img").each(function(){
			if ($(this).hasClass("analog")){
				search = true;
				console.log('Search Successful');
			};
		});

		if (search == false){
			$(this).hide();
		}else{
			$(this).show();
			$(this).css("margin-top", "100px");
			$(this).css("grid-row-start", visIndex);
			visIndex++;
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : analog | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	$('<p> <img class="imagecard" src="assets/imagetag/analog/analog.gif" width="250px"><p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});

$(".digital").click(function() {
	$('#filterID').empty();
	var visIndex = 3;
	$('.contentBox').each(function() {
		var search = false;
		var $this = $(this);
		$this.children("img").each(function(){
			if ($(this).hasClass("digital")){
				search = true;
				console.log('Search Successful');
			};
		});

		if (search == false){
			$(this).hide();
		}else{
			$(this).show();
			$(this).css("margin-top", "100px");
			$(this).css("grid-row-start", visIndex);
			visIndex++;
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : digital | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	$('<p> <img class="imagecard" src="assets/imagetag/digital/digital.gif" width="250px"><p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});

