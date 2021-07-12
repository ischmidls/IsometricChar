// script.js
// ball is character

// reference canvas using its id
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// other variables
let leftArrowPressed = false;
let upArrowPressed = false;
let rightArrowPressed = false;
let downArrowPressed = false;

//objects
const ball = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	radius: 7,
	speed: 7,
	velocityX: 5,
	velocityY: 5,
	color: '#05EDFF'
};

// drawing functions
function drawBall(x, y, radius, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
};

//moving character
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

function keyDownHandler(event) {
	switch (event.keyCode) {
		case 37:
			leftArrowPressed = true;
			break;
		case 38:
			upArrowPressed = true;
			break;
		case 39:
			rightArrowPressed = true;
			break;
		case 40:
			downArrowPressed = true;
			break;
	};
};

function keyUpHandler(event) {
	switch (event.keyCode) {
		case 37:
			leftArrowPressed = false;
			break;
		case 38:
			upArrowPressed = false;
			break;
		case 39:
			rightArrowPressed = false;
			break;
		case 40:
			downArrowPressed = false;
			break;
	};
};

function reset() {
	ball.x = canvas.width / 2;
	ball.y = canvas.height / 2;
	ball.speed = 7;

	ball.velocityX = -ball.velocityX;
	ball.velocityY = -ball.velocityY;
};

function update() {
	// move the character
	if (upArrowPressed && ball.y > 0) {
		ball.y -= 8;
	} else if (downArrowPressed && (ball.y < canvas.height - ball.height)) {
		ball.y += 8;
	} else if (leftArrowPressed && ball.x > 0) {
		ball.x -= 8;;
	} else if (rightArrowPressed && (ball.x < canvas.width - ball.width)) {
		ball.x += 8;
	};

function render() {
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	drawBall(ball.x, ball.y, ball.radius, ball.color);
};

// game loop
function gameLoop() {
	update();
	render();
};

setInterval(gameLoop, 1000 / 75);