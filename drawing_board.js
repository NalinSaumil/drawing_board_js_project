var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5.5;

const c = canvas.getContext('2d');

c.font = '50px Courier';
c.textAlign = 'center';

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth - 5;
	canvas.height = window.innerHeight - 5.5;

	c.font = '50px Courier';
	c.textAlign = 'center';

	init();
});

function colPanel(x, y, r, color) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = color;

	this.draw = function(){
		c.beginPath();
		c.strokeStyle = "black";
		c.arc(this.x, this.y, this.r + 5, 0, 2 * Math.PI);
		c.fillStyle = "gray";
		c.fill();
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		c.fillStyle = this.color;
		c.fill();
	}
}

function eraser(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;

	this.draw = function(){
		c.beginPath();
		c.strokeStyle = "black";
		c.arc(this.x, this.y, this.r + 5, 0, 2 * Math.PI);
		c.fillStyle = "grey";
		c.fill()
		c.beginPath();
		c.fillStyle = "beige";
		c.fillRect(this.x - 5, this.y - 6, 10, 12);
	}
}

var red = new colPanel(canvas.width/11, 20, 10, "red");
var orange = new colPanel(2 * (canvas.width/11), 20, 10, "orange");
var yellow = new colPanel(3 * (canvas.width/11), 20, 10, "yellow");
var green = new colPanel(4 * (canvas.width/11), 20, 10, "green");
var blue = new colPanel(5 * (canvas.width/11), 20, 10, "blue");
var pink = new colPanel(6 * (canvas.width/11), 20, 10, "pink");
var purple = new colPanel(7 * (canvas.width/11), 20, 10, "purple");
var brown = new colPanel(8 * (canvas.width/11), 20, 10, "brown");
var white = new colPanel(9 * (canvas.width/11), 20, 10, "white");
var eraser = new eraser(10 * (canvas.width/11), 20, 10)

init();

var pos = {x: 0, y: 0};
var clckPos = {x: 0, y: 0};
document.addEventListener("mousedown", setPos);
document.addEventListener("mousemove", makeLine);
document.addEventListener("mouseenter", setPos);
document.addEventListener("mouseup", colorPicker);
var setColor = "black";
var setWidth = 2;

function setPos(e) {
	pos.x = e.clientX;
	pos.y = e.clientY;
}

function colorPicker(e) {
	clckPos.x = e.clientX;
	clckPos.y = e.clientY;

	if(((red.x + 10) >= clckPos.x && (red.x - 10) <= clckPos.x) && ((red.y + 10) >= clckPos.y && (red.y - 10) <= clckPos.y)){
		setColor = "red";
		setWidth = 2;
	}
	else if(((orange.x + 10) >= clckPos.x && (orange.x - 10) <= clckPos.x) && ((orange.y + 10) >= clckPos.y && (orange.y - 10) <= clckPos.y)){
		setColor = "orange";
		setWidth = 2;
	}
	else if(((yellow.x + 10) >= clckPos.x && (yellow.x - 10) <= clckPos.x) && ((yellow.y + 10) >= clckPos.y && (yellow.y - 10) <= clckPos.y)){
		setColor = "yellow";
		setWidth = 2;
	}
	else if(((green.x + 10) >= clckPos.x && (green.x - 10) <= clckPos.x) && ((green.y + 10) >= clckPos.y && (green.y - 10) <= clckPos.y)){
		setColor = "green";
		setWidth = 2;
	}
	else if(((blue.x + 10) >= clckPos.x && (blue.x - 10) <= clckPos.x) && ((blue.y + 10) >= clckPos.y && (blue.y - 10) <= clckPos.y)){
		setColor = "blue";
		setWidth = 2;
	}
	else if(((pink.x + 10) >= clckPos.x && (pink.x - 10) <= clckPos.x) && ((pink.y + 10) >= clckPos.y && (pink.y - 10) <= clckPos.y)){
		setColor = "pink";
		setWidth = 2;
	}
	else if(((purple.x + 10) >= clckPos.x && (purple.x - 10) <= clckPos.x) && ((purple.y + 10) >= clckPos.y && (purple.y - 10) <= clckPos.y)){
		setColor = "purple";
		setWidth = 2;
	}
	else if(((white.x + 10) >= clckPos.x && (white.x - 10) <= clckPos.x) && ((white.y + 10) >= clckPos.y && (white.y - 10) <= clckPos.y)){
		setColor = "white";
		setWidth = 2;
	}
	else if(((brown.x + 10) >= clckPos.x && (brown.x - 10) <= clckPos.x) && ((brown.y + 10) >= clckPos.y && (brown.y - 10) <= clckPos.y)){
		setColor = "brown";
		setWidth = 2;
	}
	else if(((eraser.x + 12) >= clckPos.x && (eraser.x - 12) <= clckPos.x) && ((eraser.y + 12) >= clckPos.y && (eraser.y - 12) <= clckPos.y)){
		setColor = "black";
		setWidth = 30;
	}
	else {
		setColor = setColor;
		setWidth = setWidth;
	}
}

function makeLine(e){
	if(e.buttons != 1){
		return;
	}
	c.beginPath();
	c.strokeStyle = setColor;
	c.lineCap = "round";
	c.lineWidth = setWidth;
	c.moveTo(pos.x,pos.y);
	setPos(e);
	c.lineTo(pos.x,pos.y)
	c.stroke();
}

function init(){
	red.draw();
	orange.draw();
	yellow.draw();
	green.draw();
	blue.draw();
	pink.draw();
	purple.draw();
	brown.draw();
	white.draw();
	eraser.draw();
}