Parallax({selector: '.parallax-layer'});

function Parallax(options) {
	const layers =  document.querySelectorAll(options.selector);

	if (layers.length) {
		init();
	}

	function init() {
		for (let i = 0; i < layers.length; i++) {
			const layer = layers[i];
			layer.style.transform = "translateY(100px)";
		}
		window.addEventListener('scroll', (e) => {
			for (let i = 0; i < layers.length; i++) {
				const elemRect = layers[i].parentNode.getBoundingClientRect();
				layers[i].style.transform =(layers[i].className.indexOf('rotator') > -1) ?  "translate("+(((elemRect.top)/10) * -1)+"px,"+ (elemRect.top/10 + 10) +"px) rotateY(-"+(elemRect.top - 100)/15+"deg)" : "translateY("+ (elemRect.top/6 + 10) +"px)";
			}
		});
	}
}
