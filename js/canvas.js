// 线条
function canvasline() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	context.moveTo(0, 0);
	context.lineTo(200, 200);
	context.stroke();

}
// 画圆
function canvasCircle() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	context.beginPath();
	context.arc(100, 100, 30, 0, 2 * Math.PI);
	context.stroke();
}

// 文本：fillText实心，strokeText空心
function canvasFillText() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	context.font = "30px Arial";
	context.fillText("Hello World!", 10, 100);
}

// 文本空心
function canvasStrokeText() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	context.font = "30px Arial";
	context.strokeText("Hello World!", 10, 100);
}

// 线性渐变色
function canvasLinearGradient() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var gradient = context.createLinearGradient(0, 0, 170, 0);
	gradient.addColorStop(0, "red");
	gradient.addColorStop(1, "white");
	context.fillStyle = gradient;
	context.fillRect(0, 0, 150, 150);
}

// 圆形渐变色
function canvasRadialGradient() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var gradient = context.createRadialGradient(75, 50, 2, 90, 60, 100);
	gradient.addColorStop(0, "red");
	gradient.addColorStop(1, "white");
	context.fillStyle = gradient;
	context.fillRect(10, 10, 150, 100);
}

// 加载图片
function canvasDrawable() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var drawable = document.getElementById("canvas_drawable");
	context.drawImage(drawable, 10, 10);
}