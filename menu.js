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
  id:1,
  title:"Tonic",
  mobileTitle:"Tonic",
  mobileImage:"./images/Snapshoot Portfolio.png",
  featureImage:"./images/desktop1.png",
  subTitle:"Canopy",
  mobileSubTitle:"Canopy",
  work:"Back End Dev",
  mobileWork:"Back End Dev",
  date:"2015",
  livelinks:"/",
  source:"/",
  image:"./images/Counter.png", 
  technologies:["Html","Css","Ruby on Rails", "Javascript"],
  description:"A daily selection of privately personalized reads; no accounts or sign-up required.",
  mobileDescription:"A daily selection of privately personalized reads; no accounts or sign-ups required."
  },
  {
    id:2,
    title:"Multi-Post Stories",
    mobileTitle:"TMulti-Post Stories",
    mobileImage:"./images/Snapshoot Portfolio(3).png",
    featureImage:"./images/desktop1.png",
    subTitle:"FACEBOOK",
    mobileSubTitle:"Canopy",
    work:"Full Stack Dev",
    mobileWork:"Back End Dev",
    date:"2015",
    livelinks:"/",
    source:"/",
    image:"./images/Counter.png", 
    technologies:["Html","Css","Ruby on Rails", "Javascript"],
    description:"Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    mobileDescription:"A daily selection of privately personalized reads; no accounts or sign-ups required."
  },
    {
      id: 3 ,
      title:"Facebook 360",
      mobileTitle:"Tonic",
      mobileImage:"./images/Snapshoot Portfolio (1).png",
      featureImage:"./images/desktop1.png",
      subTitle:"FACEBOOK",
      mobileSubTitle:"Canopy",
      work:"Full Stack Dev",
      mobileWork:"Back End Dev",
      date:"2015",
      livelinks:"/",
      source:"/",
      image:"./images/Counter.png", 
      technologies:["Html","Css","Ruby on Rails", "Javascript"],
      description:"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      mobileDescription:"A daily selection of privately personalized reads; no accounts or sign-ups required."
    },
      {
        id: 4 ,
        title:"Uber Navigation",
        mobileTitle:"Multi-Post Stories",
        mobileImage:"./images/Snapshoot Portfolio (2).png",
        featureImage:"./images/desktop1.png",
        subTitle:"FACEBOOK",
        mobileSubTitle:"Canopy",
        work:"Full Stack Dev",
        mobileWork:"Back End Dev",
        date:"2015",
        livelinks:"/",
        source:"/",
        image:"./images/Counter.png", 
        technologies:["Html","Css","Ruby on Rails", "Javascript"],
        description:"A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
        mobileDescription:"A daily selection of privately personalized reads; no accounts or sign-ups required."
      },
]
let projectContainer= document.querySelector(".works")
function generateProjectSection(){

let displayProject = projects.map((work) =>{
  return `
  <div class="projects" >
  <div>
    <img class="desktop1" src="${work.featureImage}" alt="">
    <img class="mobile1" src="${work.mobileImage}" alt="">
  </div>
  <div class="Project-div2">
    <h2 class="works-title desktoph2">${work.title}</h2>
    <h2 class="works-title mobileh2"">${work.mobileTitle}</h2>
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
      <button id="${work.id}" class="see-project white-background">See Project</Button>
    </div>
  </div>
  </div>
  `
} );

projectContainer.innerHTML= displayProject

var popUpDisplay=document.querySelector(".pop-up");

var projectButton= document.querySelectorAll(".see-project")
projectButton.forEach((btn) =>{
   btn.addEventListener("click",function(){
    popUpDisplay.style.display = 'flex';
    popUpDisplay.innerHTML = template;
})
})
   var closePopup= document.querySelector(".popup-close")
   closePopup.addEventListener("click",function(){
    popUpDisplay.style.display = 'none';
})

}
window.addEventListener("DOMContentLoaded",generateProjectSection)


// ------------------POP UP SECTION----------------------------------------------------------
const template = `
<div class="inner-pop-up">
<div class="popCloseLayout">
<h1 class="works-title">TONIC</h1>
<a class="popup-close" href="#">X</a>
</div>
<p><span class="canopy">Canopy</span> <img class="Bullet-point" src="./images/Counter.png" alt="Counter">
            <span class="dev"> Back End Dev
              <img class="Bullet-point" src="./images/Counter.png" alt="Counter"> 2015</span>
          </p>
          <img class="popimg popMobImg" src="./images/popupMobile.png" alt="">
          <img class="popimg popDeskImg" src="./images/DesktopPop.png" alt="">
          <div class="layout-pop">
          <div>
          <p class="Pop-desktop-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br />
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>
          <p class="Pop-mobile-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>
        
          </div>
          <div>
          <ul class="white-background lan-ul">
          <li class="languages">HTML</li>
          <li class="rubby">rubby on Rails</li>
          <li class="languages">CSS</li>
          <li class="languages">JAVASCRIPT</li>
        </ul>
        <div class="button-layout">
          <a href="https://margarettechworld.github.io/Portfolio/#" ><button class="see-project white-background">See live <img class="img-btn-pop" src="./images/popButton1.png" alt="button-symbol" srcset=""></Button></a>
           <a href="https://github.com/MargaretTechworld/Portfolio" ><button class="see-project white-background">See Project <img src="./images/popButton2.svg" alt="button-symbol" srcset=""></Button></a>
        </div>
        
        </div>
      </div>

  </div>
`;

//  var popUpDisplay=document.querySelector(".pop-up");
  
//  function togglePopup(){
//   popUpDisplay.classList.toggle("pop-up-show")
//  }


  // var btn = document.querySelectorAll("button").length;
  // for(var i=0; i<btn; i++){
  //   document.querySelectorAll("button")[i].addEventListener("click", function(){
  //     popUpDisplay.classList.toggle('show');
  //     document.querySelector(".pop-up").innerHTML = template;
  //   })
  // }

  // window.addEventListener("DOMContentLoaded", function(){
  //   let btn = document.querySelectorAll(".btn");
  //   btn.forEach((b) => {
  //     b.addEventListener('click', function(){
  //       popUpDisplay.classList.toggle("show");
  //       document.querySelector(".pop-up").innerHTML = template
  //       console.log("i was pressed")
  //     });
  //   });
  // });


