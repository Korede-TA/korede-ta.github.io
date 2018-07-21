(function() {
	var offset = Math.floor(Math.random() * Math.floor(360)); 
	// window.addEventListener('mousemove', scrollWheelHandler);
	window.setInterval(colorChangeHandler, 10);
	function colorChangeHandler() {
		offset = (offset > 360) ? 0 : offset + 1 ;
		var color = "hsl("+offset.toString()+", 50%, 50%)";// alert(color);
			try { document.getElementById("title").style.color = color; } catch {}
			try { document.getElementById("tilde").style.color = color; } catch {}
			try { document.getElementById("picture").style.backgroundColor = color; } catch {}
			try { document.getElementById("return").style.color = color; } catch {}
		// document.getElementsByClassName("link").map(function(link) { link.style.color = color; })
	}	
})();
