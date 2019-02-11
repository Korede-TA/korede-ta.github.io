(function() {
	var offset = Math.floor(Math.random() * Math.floor(360)); 
	// window.addEventListener('mousemove', scrollWheelHandler);
	window.setInterval(colorChangeHandler, 10);

	var globalColor;

	var canvasEngaged = false;

	function colorChangeHandler() {
		offset = (offset > 360) ? 0 : offset + 1 ;
		var color = "hsl("+offset.toString()+", 50%, 50%)";// alert(color);
		globalColor = color;
			try { document.getElementById("title").style.color = color; } catch {}
			try { document.getElementById("tilde").style.color = color; } catch {}
			try { document.getElementById("picture").style.backgroundColor = color; } catch {}
			try { document.getElementById("return").style.color = color; } catch {}
			try { document.getElementById("picture_canvas").style.backgroundColor = color; } catch {}
		// document.getElementsByClassName("link").map(function(link) { link.style.color = color; })
	}	

	document.addEventListener("DOMContentLoaded", function(event) {
		var canvas = document.getElementById("picture_canvas"),
		    ctx = canvas.getContext("2d"),
			 //line = new Line(ctx),
			 img = new Image;
		canvas.width = 100;
		canvas.style.cursor = "pointer";

		img.onload = function() {
			ctx.imaegSmoothingQuality = "low";
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		}
		img.src = "./no_eyes_2_jul_18_noalpha.png";

		//var pictureWidth = document.getElementById("picture").width;

		var mouseClicked = false;
		canvas.addEventListener("mousedown", function (e) {
			if (canvasEngaged === false) { // if canvas hasn't been engaged, engage it and do an animation of it growing
				canvas.style.cursor = "cell";

				canvas.style.animation = "shake 0.2s";
				canvas.style.animationIterationCount = "infinite";
				var intervalCallCount = 0;
				var interval = setInterval(function() {
					canvas.width  += 100;
					canvas.height += 100;
					ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

					if (++intervalCallCount === 4) {
						window.clearInterval(interval);
					}
				}, 500);
				canvasEngaged = true;
			}
			mouseClicked = true;
		}, false);
		canvas.addEventListener("mouseup", function (e) {
			if (canvasEngaged === false) { return; } // if canvas hasn't been engaged, ignore event
			// stop drawing 
			mouseClicked = false;
		}, false);
		canvas.addEventListener("mouseout", function (e) {
			if (canvasEngaged === false) { return; } // if canvas hasn't been engaged, ignore event
			// stop drawing 
			mouseClicked = false;
		}, false);

		var pos = {x: 0, y: 0}; function setPos(e) { pos.x = e.clientX-canvas.offsetLeft; pos.y = e.clientY-canvas.offsetTop };

		canvas.addEventListener("mousemove", function (e) {
			if (canvasEngaged === false) { return; } // if canvas hasn't been engaged, ignore event
			// draw path
			if (mouseClicked === false) { return ;} 
			/* // alternate drawing code
				ctx.beginPath();
				ctx.lineCap = 'round';
				ctx.arc(e.clientX, e.clientY, 7.5, 0, Math.PI * 2, false);
				ctx.lineWidth = 5;
				ctx.strokeStyle = globalColor;
				ctx.stroke();
			*/

			ctx.beginPath(); // begin
			ctx.lineWidth = 5;
			ctx.lineCap = 'round';
			ctx.strokeStyle = globalColor;
			ctx.moveTo(pos.x, pos.y); // from
			setPos(e);
			ctx.lineTo(pos.x, pos.y); // to
			ctx.stroke();
		}, false);
	});

	// hacky sleep function stolen from here: https://stackoverflow.com/a/16873849/6641502
	function sleep(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
				break;
			}
		}
	}
})();
