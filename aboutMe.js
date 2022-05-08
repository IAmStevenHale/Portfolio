const section = document.querySelector('section');
const mask = document.querySelector('.mask');
const contactBox = document.getElementById('contactBox');
const contactBoxText = document.getElementById('contactBoxText');
const contactBoxContainer = document.getElementById('contactBoxContainer');

section.addEventListener('mousemove', (evt) => {
  let navbarHeight = window.innerHeight * 0.15;
  let marginLeft = window.innerWidth * 0.38;
  console.log();
  mask.style.clipPath = `circle(60px at ${evt.clientX - marginLeft}px ${
    evt.clientY - navbarHeight
  }px`;
});

function showContactDetails(eleID) {
  if (eleID === 'contactNumber') {
    contactBoxContainer.style.display = 'flex';
    contactBoxText.innerHTML = '0456 645 468';
    contactBoxText.style.fontSize = '5vh';
  } else if (eleID === 'contactEmail') {
    contactBoxContainer.style.display = 'flex';
    contactBoxText.innerHTML = 'iamstevenhale@gmail.com';
    contactBoxText.style.fontSize = '2.5vh';
  } else if (eleID === 'contactLinkedIn') {
    open('https://www.linkedin.com/in/steven-hale/');
  } else if (eleID === 'contactGitHub') {
    open('https://github.com/IAmStevenHale');
  } else if (eleID === 'contactBox' && eleID !== 'contactBoxText') {
    contactBoxContainer.style.display = 'none';
  }
}
