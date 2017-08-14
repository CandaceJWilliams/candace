var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = document.getElementById("main_background").getContext("2d");
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "white";
// c.stroke();

// Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (var i = 0; i < 1000; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle = 'blue';
// 	c.stroke();
// }



console.log('successful');

var count = 0;
var keeper = 0;
var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 3;
var minRadius = 0;

var colorArray = [
	'#4B4057',
	'#8095AB',
	'#B4D2E6',
	'#F5F2ED',
	'#FFE6A4',
];

window.addEventListener('mousemove',
	function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);
})

window.addEventListener('resize', function()
	{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
})


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = 'white'
		c.fill(); 
	}

	this.update = function() {
		//if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			//this.dx = -this.dx;
		//}

		//if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			//this.y = innerHeight;
		//}

		this.x += this.dx;
		this.y += this.dy;

		//interactivity

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.y += innerHeight;
		}

		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			if (this.radius < maxRadius) {
			this.radius += 1;
		}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw()

	}
}

function Rectangle (x, y) {
	this.x = x
	this.y = y

}


var circleArray = [];

function init() {

	circleArray = [];

	for (var i = 0; i < 800; i++) {
		var radius = Math.random() * 2;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = 0;
		var dy = (Math.random() * -0.5);
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}

function rect_init() {

}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();

	}
	// c.beginPath();
	// c.fillStyle = 'white'
	// c.rect((innerWidth / 2) - innerWidth / 16, innerHeight / 10, innerWidth / 10, innerHeight / 100);
	// c.fill();

	// c.beginPath();
	// c.fillStyle = 'white'
	// c.rect((innerWidth / 2) - innerWidth / 16, innerHeight - (innerHeight / 10), innerWidth / 10, innerHeight / 100);
	// c.fill();
}



animate();
init();
console.log('executed')