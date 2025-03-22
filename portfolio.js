const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');
const servicesLists = document.querySelectorAll('.services-list');
const servicesBoxs = document.querySelectorAll('.services-box');
const scrollContainer = document.querySelector('.about-info');
const scrollContainer1 = document.querySelector('.about-info');

// Navbar action and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    console.log(`Clicked nav ${idx}`);
    document.querySelector('.nav-list li.active').classList.remove('active');
    nav.classList.add('active');
    cube.style.transform = `rotateY(${idx * -90}deg)`;
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
      
      activeSection.classList.remove('active');
    }
    if (idx === 0) { // Home link
      sections[0].classList.add('active');
    } else if (idx === navs.length - 1) { // Contact link
      sections[sections.length - 1].classList.add('active');
    } else {
      sections[idx].classList.add('active');
    }

  });
});

// Resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    console.log(`Clicked resume tab ${idx}`);
    document.querySelector('.resume-list.active').classList.remove('active');
    list.classList.add('active');
    const activeBox = document.querySelector('.resume-box.active');
    if (activeBox) {
      console.log(`Removing active class from ${activeBox.className}`);
      activeBox.classList.remove('active');
    }
    resumeBoxs[idx].classList.add('active');
    console.log(`Added active class to ${resumeBoxs[idx].className}`);
    cube.style.transform = `rotateY(${idx + 1} * -90deg)`;
  });
});

// Portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    console.log(`Clicked portfolio tab ${idx}`);
    document.querySelector('.portfolio-list.active').classList.remove('active');
    list.classList.add('active');
    const activeBox = document.querySelector('.portfolio-box.active');
    if (activeBox) {
      console.log(`Removing active class from ${activeBox.className}`);
      activeBox.classList.remove('active');
    }
    portfolioBoxs[idx].classList.add('active');
    console.log(`Added active class to ${portfolioBoxs[idx].className}`);
    cube.style.transform = `rotateY(${idx + 2} * -90deg)`;
  });
});

// Services section when clicking tab-list
servicesLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    console.log(`Clicked services tab ${idx}`);
    document.querySelector('.services-list.active').classList.remove('active');
    list.classList.add('active');
    const activeBox = document.querySelector('.services-box.active');
    if (activeBox) {
      console.log(`Removing active class from ${activeBox.className}`);
      activeBox.classList.remove('active');
    }
    servicesBoxs[idx].classList.add('active');
    console.log(`Added active class to ${servicesBoxs[idx].className}`);
    cube.style.transform = `rotateY(${idx + 3} * -90deg)`;
  });
});



function initTypingAnimation() {
    const text1 = document.getElementById('text1');
    const texts = ['Frontend Web Developer', 'UI / UX Designer'];
    let currentTextIndex = 0;
  
    function animateText(text) {
      const letters = text.split('');
      let i = 0;
      let left = 0;
  
      const intervalId = setInterval(() => {
        if (i < letters.length) {
          const span = document.createElement('span');
          span.textContent = letters[i];
          span.style.left = `${left}px`;
          text1.appendChild(span);
          left += -3; // 2px spacing between letters
          i++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            text1.innerHTML = '';
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            animateText(texts[currentTextIndex]);
          }, 2000); // 2 seconds
        }
      }, 250); // 200ms delay between each letter
    }
  
    animateText(texts[currentTextIndex]);
  }
  
  document.addEventListener('DOMContentLoaded', initTypingAnimation);

  scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollContainer.scrollTop += event.deltaY;
  });
  
  scrollContainer1.addEventListener('touchmove', (event) => {
    event.preventDefault();
    scrollContainer.scrollTop += event.touches[0].clientY;
  });
  