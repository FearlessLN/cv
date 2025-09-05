if(1 - (window.scrollY / 700) < 0) {
  document.getElementById('particles-js').style.transition = 'all 0s'
  document.getElementById('particles-js').style.opacity = 0;
}

window.addEventListener("scroll", () => {
  let opacity = 1 - (window.scrollY / 700);
  if(window.scrollY < 0 || window.scrollY < 1) {
    return
  } 
  document.getElementById('particles-js').style.opacity = opacity;
  document.getElementById('particles-js').style.transition = 'all 0.3s'
})