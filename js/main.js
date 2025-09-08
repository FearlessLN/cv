// ================================== Background Opacity ===============================

let particlesBg = document.getElementById('particles-js');

if(1 - (window.scrollY / 500) < 0) {
  particlesBg.style.display = 'none';
  particlesBg.style.opacity = 0;
}

window.addEventListener("scroll", () => {
  let opacity = 1 - (window.scrollY / 500);
  if(opacity < -0.5 || opacity > 1) {
    particlesBg.style.opacity = 0;
    particlesBg.style.display = 'none';
    return
  } 
  particlesBg.style.display = 'block';
  particlesBg.style.opacity = opacity;
  particlesBg.style.transition = 'all 0.3s'
})

// ================================== Ahmad Logo ===============================

let ahmadSound = document.getElementById('ahmad__sound');
let logo = document.querySelector('.logo')

ahmadSound.volume = 0.2;

logo.addEventListener('mouseover', () => {
  ahmadSound.play()
})
logo.addEventListener('mouseout', () => {
  ahmadSound.pause()
})
