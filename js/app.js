// Particle.js running

particlesJS.load('particles-js', 'js/lib/particles/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

// Welcome text

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  });

//event card and hover

$(document).ready(function(){
  $('.harry').on('mouseenter', function(e){
    x = e.pageX - $(this).offset().left,
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x})
    })  
    $('.harry').on('mouseout', function(e){
    x = e.pageX - $(this).offset().left,
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x})
    })   
  });