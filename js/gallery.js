// Particle.js running

particlesJS.load('particles-js', '../../js/lib/particles/particle-gallery.json', function() {
    console.log('callback - particles.js config loaded');
});

//heading

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
});
