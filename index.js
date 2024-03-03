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
// document.getElementById(`searchIcon`).addEventListener(`click`, function toggleSearchBox() {
// document.getElementById(`searchBox`).style.display = 'block';
// document.getElementById(`bodyMinusSearch`).style.marginBlockStart = '5rem';
// document.getElementById(`header`).style.marginBlockStart = '5rem';

// })
let menuOpen = false;
const menuIcon = document.getElementById(`menuIcon`);

document.getElementById(`menuIcon`).addEventListener(`click`, function toggleMenu() {
    if (!menuOpen) {
        document.getElementById(`mobile-nav`).style.display = 'flex';
        document.getElementById(`searchIcon`).style.display = 'none';
        menuIcon.classList.add('cross'); 
        menuOpen = true;
    } else {
        document.getElementById(`mobile-nav`).style.display = 'none';
        document.getElementById(`searchIcon`).style.display = 'block';
        menuIcon.classList.remove('cross');
        menuOpen = false;
    }
});


