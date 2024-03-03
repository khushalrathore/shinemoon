document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  
  if (section) {
    var sectionOffset = section.offsetTop;
    var distanceFromSection = 0.1 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    window.addEventListener('scroll', function() {
      if (window.scrollY > sectionOffset + distanceFromSection) {
        header.style.backgroundColor = 'black';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    });
  } 
});
