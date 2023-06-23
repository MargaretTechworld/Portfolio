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

const template = `
<div class="inner-pop-up">
<h1 class="works-title">TONIC</h1>
<a class="popup-close" href="#">X</a>
<p><span class="canopy">Canopy</span> <img class="Bullet-point" src="./images/Counter.png" alt="Counter">
            <span class="dev"> Back End Dev
              <img class="Bullet-point" src="./images/Counter.png" alt="Counter"> 2015</span>
          </p>
          <img class="popimg" src="./images/DesktopPop.png" alt="">
          <p class="para-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>
          <div class="pop-side">
          <ul class="white-background lan-ul">
          <li class="languages">HTML</li>
          <li class="rubby">rubby on Rails</li>
          <li class="languages">CSS</li>
          <li class="languages">JAVASCRIPT</li>
        </ul>
        <button class="see-project white-background">See Project</Button>
        </div>

          </div>
`;
