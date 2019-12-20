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
			$(this).css("margin-top", "100px");
		}else{
			$(this).show();
			console.log('result : true');
			$(this).css("margin-top", "100px");
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : performance | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});

$(".installation").click(function() {
	$('#filterID').empty();
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
			$(this).css("margin-top", "100px");
		}else{
			$(this).show();
			$(this).css("margin-top", "100px");
		};

	});
	//$('#filterID').css("display", "grid");
	$('<p>filtered by : installation | <a href= "index.html">clear</a></p>').appendTo('#filterID');
	//$('<a href= "index.html">clear</a>').appendTo('#filterID');

});


