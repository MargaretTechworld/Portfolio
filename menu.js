// Get the menu element
const menu = document.querySelector('.nav-box');

// Get the toggle button element
const toggleButton = document.querySelector('.menu');

// Get the close button element
const closeButton = document.querySelector('.close');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the menu's visibility
  menu.classList.toggle('show');
});

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the menu
  menu.classList.remove('show');
});

// Add an event listener to the menu options
menu.querySelectorAll('a').forEach((link) => {
  // When the user clicks on a menu option,
  // hide the menu and scroll to the correct part of the page
  link.addEventListener('click', () => {
    // Hide the menu
    menu.classList.remove('show');

    // Scroll to the correct part of the page
    window.scrollTo(0, link.offsetTop);
  });
});

// --------------------GENERATE PROJECT SECTION-----------------------------------
const projects = [
  {
    order: 'order1',
    id: 1,
    title: 'Tonic',
    mobileTitle: 'Tonic',
    mobileImage: './images/Snapshoot Portfolio.png',
    featureImage: './images/desktop1.png',
    subTitle: 'Canopy',
    mobileSubTitle: 'Canopy',
    work: 'Back End Dev',
    mobileWork: 'Back End Dev',
    date: '2015',
    livelinks: 'https://margarettechworld.github.io/Portfolio/#',
    source: 'https://github.com/MargaretTechworld/Portfolio',
    image: './images/Counter.png',
    technologies: ['Html', 'Css', 'Ruby on Rails', 'Javascript'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-up required.',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    order: 'order',
    id: 2,
    title: 'Multi-Post Stories',
    mobileTitle: 'TMulti-Post Stories',
    mobileImage: './images/Snapshoot Portfolio(3).png',
    featureImage: './images/desktop 2.png',
    subTitle: 'FACEBOOK',
    mobileSubTitle: 'Canopy',
    work: 'Full Stack Dev',
    mobileWork: 'Back End Dev',
    date: '2015',
    livelinks: 'https://margarettechworld.github.io/Portfolio/#',
    source: 'https://github.com/MargaretTechworld/Portfolio',
    image: './images/Counter.png',
    technologies: ['Html', 'Css', 'Ruby on Rails', 'Javascript'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    order: 'order1',
    id: 3,
    title: 'Facebook 360',
    mobileTitle: 'Tonic',
    mobileImage: './images/Snapshoot Portfolio (1).png',
    featureImage: './images/desktop3.png',
    subTitle: 'FACEBOOK',
    mobileSubTitle: 'Canopy',
    work: 'Full Stack Dev',
    mobileWork: 'Back End Dev',
    date: '2015',
    livelinks: 'https://margarettechworld.github.io/Portfolio/#',
    source: 'https://github.com/MargaretTechworld/Portfolio',
    image: './images/Counter.png',
    technologies: ['Html', 'Css', 'Ruby on Rails', 'Javascript'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    order: 'order',
    id: 4,
    title: 'Uber Navigation',
    mobileTitle: 'Multi-Post Stories',
    mobileImage: './images/Snapshoot Portfolio (2).png',
    featureImage: './images/Snapshoot Portfolio (2).png',
    subTitle: 'FACEBOOK',
    mobileSubTitle: 'Canopy',
    work: 'Full Stack Dev',
    mobileWork: 'Back End Dev',
    date: '2015',
    livelinks: 'https://margarettechworld.github.io/Portfolio/#',
    source: 'https://github.com/MargaretTechworld/Portfolio',
    image: './images/Counter.png',
    technologies: ['Html', 'Css', 'Ruby on Rails', 'Javascript'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
];
const projectContainer = document.querySelector('.works');
const popUpDisplay = document.querySelector('.pop-up');

const closePop = () => {
  popUpDisplay.style.display = 'none';
};
const addClosePopupEvent = () => {
  const closePopup = document.getElementById('closelink');
  closePopup.addEventListener('click', () => {
    closePop();
  });
};

function generateProjectSection() {
  const displayProject = projects.map((work, index) => `
  <div class="projects" >
  <div class="${work.order}">
    <img class="desktop1" src="${work.featureImage}" alt="">
    <img class="mobile1" src="${work.mobileImage}" alt="">
  </div>
  <div class="Project-div2">
    <h2 class="works-title desktoph2">${work.title}</h2>
    <h2 class="works-title mobileh2">${work.mobileTitle}</h2>
    <p class="desktopP"><span class="canopy">${work.subTitle}</span> <img class="Bullet-point" src="${work.image}" alt="Counter">
      <span class="dev"> ${work.work}
        <img class="Bullet-point" src="${work.image}" alt="Counter"> ${work.date}</span>
    </p>
    <p class="mobileP"><span class="canopy">${work.mobileSubTitle}</span> <img class="Bullet-point" src=".${work.image}"
              alt="Counter"> <span class="dev">${work.mobileWork}
              <img class="Bullet-point" src="${work.image}" alt="Counter"> ${work.date}</span></p>
    <div class="project-description">
      <p class="white-background para desktopP2">${work.description}</p>
      <p class="white-background mobileP2">${work.mobileDescription}</p>
    </div>
  
    <ul class="white-background lan-ul">
      <li class="languages">${work.technologies[0]}</li>
      <li class="rubby">${work.technologies[2]}</li>
      <li class="languages">${work.technologies[1]}</li>
      <li class="languages">${work.technologies[3]}</li>
    </ul>
    <div class="white-background btn-div">
      <button id="${index}" class="see-project white-background">See Project</Button>
    </div>
  </div>
  </div>
  `);

  projectContainer.innerHTML = displayProject;
}

function displayProjectPopup(project) {
  const div = document.createElement('div');
  div.className = 'inner-pop-up';
  div.innerHTML = `
    <div class="popCloseLayout">
    <h1 class="works-title desktoph2">${project.title}</h1>
    <h1 class="works-title mobileh2">${project.mobileTitle}</h1>
    <div id="closelink">
    <p class="popup-close">X</p>
    </div>
    </div>
    <p class="desktopP"><span class="canopy">${project.subTitle}</span> <img class="Bullet-point" src="${project.image}" alt="Counter">
                <span class="dev"> ${project.work}
                  <img class="Bullet-point" src="${project.image}" alt="Counter"> ${project.date}</span>
              </p>
    <p class="mobileP" ><span class="canopy">${project.mobileSubTitle}</span> <img class="Bullet-point" src="${project.image}" alt="Counter">
                <span class="dev"> ${project.work}
                  <img class="Bullet-point" src="${project.image}" alt="Counter"> ${project.date}</span>
              </p>
              <img class="popMobImg" src="${project.mobileImage}" alt="">
              <img class="popimg popDeskImg" src="${project.featureImage}" alt="">
              <div class="layout-pop">
              <div>
              <p class="Pop-desktop-p">${project.description}</p>
              <p class="Pop-mobile-p">${project.mobileDescription}</p>
            
              </div>
              <div>
              <ul class="white-background lan-ul">
              <li class="Popup-tech">${project.technologies[0]}</li>
              <li class="Popup-tech">${project.technologies[1]}</li>
              <li class="Popup-tech">${project.technologies[3]}</li>
              <li class="Popup-tech-desktop">${project.technologies[2]}</li>
              <li class="Popup-tech-desktop">Bootstrap</li>
            </ul>
            <div class="button-layout">
              <a class="pop-btn-link" href="${project.livelinks}" ><button class="pop-links-button" white-background">See live <img class="img-btn-pop" src="./images/popButton1.png" alt="button-symbol" srcset=""></Button></a>
               <a class="pop-btn-link" href="${project.source}" ><button class="pop-links-button" white-background">See Project <img class="img-btn-pop" src="./images/popButton2.svg" alt="button-symbol" srcset=""></Button></a>
            </div>
            
            </div>
          </div>
    
      `;

  return div;
}

function addProjectButtonEvent() {
  const projectButton = document.querySelectorAll('.see-project');
  projectButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      popUpDisplay.innerHTML = '';
      popUpDisplay.append(displayProjectPopup(projects[btn.id]));
      popUpDisplay.style.display = 'flex';
      addClosePopupEvent();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  generateProjectSection();
  addProjectButtonEvent();
});

// ---------------POP UP--------------------------------------------------------

// ---------------------FORM VALIDATION CODE---------------------
document.getElementById('Contact').addEventListener('submit', (event) => {
  // prevent default action

  // get email input value.
  const emailValue = document.getElementById('email-address').value;

  // Check for email casing.
  if (emailValue === emailValue.toLowerCase()) {
    document.getElementById('error-message').innerHTML = 'form submitted succesfully';
  } else {
    document.getElementById('error-message').innerHTML = 'Email must be in lower case';
    event.preventDefault();
  }
});
