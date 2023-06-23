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

// ---------------------FORM VALIDATION CODE----------------------
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
