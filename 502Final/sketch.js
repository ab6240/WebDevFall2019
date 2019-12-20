function setup() {
	loadFont('typeface/Cako Regular.otf', BadWord)
	canvas = createCanvas(windowWidth, windowHeight);
	background(0,0,0);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
}

function draw() {
	clear();
	bm1 = new BadMove();
}

function BadMove(){
	var Xstart = windowWidth*(2/3);
	var Ystart = windowHeight*(1/3);
	var restr = 25;
	var colormod = mouseX/10;
	//var restrY = 20;
	var Xbound = map(mouseX,0, windowWidth, Xstart-(restr/2), Xstart + (restr/2));
	var Ybound = map(mouseY,0,windowHeight, Ystart-(restr/2), Ystart + (restr/2));
	var altX = map(-mouseX,0, windowWidth, Xstart-(restr/2), Xstart + (restr/2));
	var altY = map(-mouseY,0,windowHeight, Ystart-(restr/2), Ystart + (restr/2));
	bw1 = new BadWord(Xbound, altY, 2, 17,-colormod,colormod,-colormod,1000);
	bw2 = new BadWord(altX, Ybound, 2, 17,colormod,-colormod,colormod,150);
}


function BadWord(x,y,row,column,rmod,gmod,bmod,amod){
	let bt = '502502502';
	let ba = 'badgateway';
	var rowcount = 0;
	var columncount = 0;
	this.x = x;
	this.y = y;
	this.rmod = rmod;
	this.gmod = gmod;
	this.bmod = bmod;
	this.amod = amod;
	this.row = row;
	this.column = column;
	while (rowcount < row){
		columncount = 0;
		while (columncount < column){
			if((columncount * rowcount) % 13 == 0 && (columncount * rowcount) != 0){
				this.time = millis()/600;
      	this.r = map(sin(this.time/45), -1, 1, 0, 255);
      	this.g = map(sin(this.time+22.5/90), -1, 1, 0, 255);
      	this.b = map(sin(this.time+45/45), -1, 1, 0, 255);
				fill(this.r,this.g,this.b,150);
				textSize(24);
				//textFont("Cako", "Black");
				textStyle(BOLD);
				text(ba,x + (textWidth(bt)*rowcount),y + (20*columncount));
				columncount++
			}
			else{ 
				fill(232+rmod,79+bmod,12+gmod,amod);
				textSize(24);
				//textFont("Cako", "Black-Italic")
				textStyle(BOLDITALIC);
				text(bt,x + (textWidth(bt)*rowcount),y + (20*columncount));
				columncount++
			}
		}
		rowcount++;
	}

}