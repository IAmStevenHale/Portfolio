const titleLetters = document.getElementsByClassName('titleInput');
const arrow = document.getElementById('arrow');
const title = document.getElementById('title');
const portfolio = document.getElementById('portfolio');
const aboutMe = document.getElementById('aboutMe');
const resume = document.getElementById('resume');
const navBar = document.getElementById('navbar');
let currentPage = 'title';

let count = 0;
//
//Turn on the lights
function titleOnWave() {
  setTimeout(function () {
    titleLetters[count].checked = true;
    count++;
    if (count < titleLetters.length) {
      titleOnWave();
    }
  }, 200);
}

//Turn off the lights
function titleOffWave() {
  setTimeout(function () {
    count--;
    titleLetters[count].checked = false;
    if (count > 0) {
      titleOffWave();
    }
  }, 200);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function titleFlicker() {
  setInterval(function () {
    var val = 1;
    if (Math.random() > 0.5) {
      val = Math.floor(Math.random() * 10 + 1);
    }

    let randomInt = getRandomInt(12);
    if (randomInt < 14 && randomInt >= 0 && !titleLetters[randomInt].checked) {
      titleLetters[randomInt].checked = true;
      setTimeout(function () {
        titleLetters[randomInt].checked = false;
      }, 200);
    }
  }, 2000);
}

function showHideArrow(bool) {
  if (bool) {
    arrow.classList.add('gone');
  } else {
    arrow.style.display = 'flex';
    arrow.classList.remove('gone');
  }
}

//Main function
function main() {
  setTimeout(function () {
    titleOnWave(true);
  }, 500);

  setTimeout(function () {
    titleOffWave();
  }, 4500);

  setTimeout(function () {
    titleFlicker();
    showHideArrow(false);
  }, 7600);
  setTimeout(function () {
    showHideArrow(false);
  }, 8000);
}

function enterSite() {
  title.classList.add('moveOffScreen');
  portfolio.classList.add('moveOnToScreen');
  currentPage = 'portfolio';
}
function goToTitle(thisPage) {
  if (thisPage === 'portfolio') {
    currentPage = 'title';
    portfolio.classList.remove('moveOnToScreen');
    portfolio.classList.add('moveOffScreen');
    navBar.classList.remove('moveOnToScreen');
    navBar.classList.add('moveOffScreen');
    title.classList.add('moveOnToScreen');
    arrow.classList.add('moveOnToScreen');
  } else if (thisPage === 'aboutMe') {
    currentPage = 'title';
    aboutMe.classList.remove('moveOnToScreen');
    aboutMe.classList.add('moveOffScreen');
    navBar.classList.remove('moveOnToScreen');
    navBar.classList.add('moveOffScreen');
    title.classList.add('moveOnToScreen');
    arrow.classList.add('moveOnToScreen');
  } else if (thisPage === 'resume') {
    currentPage = 'title';
    resume.classList.remove('moveOnToScreen');
    resume.classList.add('moveOffScreen');
    navBar.classList.remove('moveOnToScreen');
    navBar.classList.add('moveOffScreen');
    title.classList.add('moveOnToScreen');
    arrow.classList.add('moveOnToScreen');
  } else if (thisPage === 'title') {
    return;
  }
}
function goToPortfolio(thisPage) {
  if (thisPage === 'title') {
    currentPage = 'portfolio';
    title.classList.remove('moveOnToScreen');
    title.classList.add('moveOffScreen');
    arrow.classList.remove('moveOnToScreen');
    arrow.classList.add('moveOffScreen');
    portfolio.classList.add('moveOnToScreen');
    navBar.classList.add('moveOnToScreen');
  } else if (thisPage === 'aboutMe') {
    currentPage = 'portfolio';
    aboutMe.classList.remove('moveOnToScreen');
    aboutMe.classList.add('moveOffScreen');
    portfolio.classList.add('moveOnToScreen');
  } else if (thisPage === 'resume') {
    currentPage = 'portfolio';
    resume.classList.remove('moveOnToScreen');
    resume.classList.add('moveOffScreen');
    portfolio.classList.add('moveOnToScreen');
  } else if (thisPage === 'portfolio') {
    return;
  }
}
function goToAboutMe(thisPage) {
  if (thisPage === 'title') {
    currentPage = 'aboutMe';
    title.classList.remove('moveOnToScreen');
    title.classList.add('moveOffScreen');
    arrow.classList.remove('moveOnToScreen');
    arrow.classList.add('moveOffScreen');
    aboutMe.classList.add('moveOnToScreen');
    navBar.classList.add('moveOnToScreen');
  } else if (thisPage === 'portfolio') {
    currentPage = 'aboutMe';
    portfolio.classList.remove('moveOnToScreen');
    portfolio.classList.add('moveOffScreen');
    aboutMe.classList.add('moveOnToScreen');
  } else if (thisPage === 'resume') {
    currentPage = 'aboutMe';
    resume.classList.remove('moveOnToScreen');
    resume.classList.add('moveOffScreen');
    aboutMe.classList.add('moveOnToScreen');
  } else if (thisPage === 'aboutMe') {
    return;
  }
}

function goToResume(thisPage) {
  if (thisPage === 'title') {
    currentPage = 'resume';
    title.classList.remove('moveOnToScreen');
    title.classList.add('moveOffScreen');
    arrow.classList.remove('moveOnToScreen');
    arrow.classList.add('moveOffScreen');
    resume.classList.add('moveOnToScreen');
    navBar.classList.add('moveOnToScreen');
  } else if (thisPage === 'portfolio') {
    currentPage = 'resume';
    portfolio.classList.remove('moveOnToScreen');
    portfolio.classList.add('moveOffScreen');
    resume.classList.add('moveOnToScreen');
  } else if (thisPage === 'aboutMe') {
    currentPage = 'resume';
    aboutMe.classList.remove('moveOnToScreen');
    aboutMe.classList.add('moveOffScreen');
    resume.classList.add('moveOnToScreen');
  } else if (thisPage === 'resume') {
    return;
  }
}
main();
