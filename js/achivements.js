// Particle.js running

particlesJS.load('particles-js', '../../js/lib/particles/particle-achivements.json', function() {
    console.log('callback - particles.js config loaded');
});


var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
});

// Revel on scroll
var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("body");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "vis") // add class toggle
							.addTo(controller);
		}
