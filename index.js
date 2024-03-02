document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('header');
  var section = document.querySelector('section');
  var headerHeight = header.offsetHeight;
  var sectionOffset = section.offsetTop;
  var distanceFromSection = 1 * parseFloat(getComputedStyle(document.documentElement).fontSize);

  console.log("Header height:", headerHeight);
  console.log("Section offset:", sectionOffset);

  window.addEventListener('scroll', function() {
    console.log("Scroll position:", window.scrollY);
    
    if (window.scrollY > sectionOffset + distanceFromSection) {
      console.log("Scrolled past section.");
      header.style.backgroundColor = 'black';
    } else {
      console.log("Not scrolled past section.");
      header.style.backgroundColor = 'transparent';
    }
  });
});
