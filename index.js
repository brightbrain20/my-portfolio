import Data from './module/data.js';

const mobileNavBtn = document.querySelector('.dropdown-img');
const removeBtn = document.querySelector('.remove-btn');
const mobileNav = document.querySelector('#mobile-navigation');
const mobileNavLinks = document.querySelectorAll('.mobile-item');
const popupContainer = document.querySelector('.popup');
const work = document.querySelector('.work-container');
const about = document.querySelector('#about');

const navToggle = () => {
  mobileNav.classList.toggle('active');
  removeBtn.classList.toggle('hidden');
};

mobileNavBtn.addEventListener('click', navToggle);
removeBtn.addEventListener('click', navToggle);

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', navToggle);
});

const displayPopup = (id) => {
  Data.forEach((data) => {
    const dataId = data.id;
    if (dataId === id) {
      popupContainer.innerHTML = `
        <div class="popup2">
        <div class="multi-container">
          
            <h2>${data.title}</h2>
          
          <div class="exit">x</div>
        </div>
        <ul class="language">
          <li >html</li>
          <li>bootstrap</li>
          <li>Ruby on rails</li>
        </ul>
        <div class="content-container">
          <div class="img">
            <img src="${data.featured_image.image}" alt="img">
          </div>
          <div class="popup-body">
            <p> ${data.description}</p>
            <ul>
              <li class="link-img">
                <a href="">
                  <img src="./Images/Enable 1.svg"  alt="img">
                </a>
              </li>
              <li class="link-img ">
                <a href="">
                  <img src="./Images/Enable.svg" class="btn2" alt="img">
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
        `;
    }
  });
};

function populateProjets() {
  about.innerHTML = ` 
  <div class="Recent-work">
      <div class="Recent">My Recent Works</div>
      <div class="hr">
        <hr>
      </div>
    </div>
    <div class="Multi-Post-container">
      <div class="about-img">
        <img src="./Images/Img Placeholder.png" alt="">
      </div>
      <div class="desktop">
        <img src="./Images/Img Placeholder (2).png" class="img-about" alt="">
      </div>
      <div class="Multi">
        <p class="Multi-Post-Heading">
          Multi-Post Stories
        </p>
        <p class="Multi-Post-stories">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
          has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a standard dummy text.
        </p>
        <ul class="Multi-Post-ul">
          <li class="Multi-Post-li">
            css
          </li>
          <li class="Multi-Post-li">
            html
          </li>
          <li class="Multi-Post-li bootstrap">
            bootstrap
          </li>
          <li class="Multi-Post-li">
            Ruby
          </li>
        </ul>
        <a href="#1" id="one"  class="Multi-Post-project cards button">See Project</a>
      </div>
    </div>
  `;
  work.innerHTML = `
  <div class="art-container">
  <div class="heading">
    <div class="heading-body">
      <p class="profesional-Art-heading">
        Profesional Art Printing Data
      </p>
      <p class="profesional-Art-content">
        A daily
        selection of privately personalized reads;
        no accounts or sign-ups required. has been the
        industry's standard
      </p>
      <ul class="profesional-Art-ul">
        <li class="profesional-Art-li">html</li>
        <li class="profesional-Art-li">bootstrap</li>
        <li class="profesional-Art-li">Ruby</li>
      </ul>
    </div>
    <div class="heading-btn"><a href="#2" id="two" class="profesional-Art-btm cards button">See Project</a></div>
  </div>
  <div class="heading flex2">
    <div class="heading-body">
      <p class="profesional-Art-heading">
        Data Dashboard Healthcare
      </p>
      <p class="profesional-Art-content">
        A daily
        selection of privately personalized reads;
        no accounts or sign-ups required. has been the
        industry's standard
      </p>
      <ul class="profesional-Art-ul">
        <li class="profesional-Art-li">html</li>
        <li class="profesional-Art-li">bootstrap</li>
        <li class="profesional-Art-li">Ruby</li>
      </ul>
    </div>
    <div class="heading-btn">
      <a href="#2" id="three" class="profesional-Art-btm cards button">See Project</a>
    </div>
  </div>
  <div class="heading flex3">
    <div class="heading-body">
      <p class="profesional-Art-heading">
        Data Dashboard Healthcare
      </p>
      <p class="profesional-Art-content">
        A daily
        selection of privately personalized reads;
        no accounts or sign-ups required. has been the
        industry's standard
      </p>
      <ul class="profesional-Art-ul">
        <li class="profesional-Art-li">html</li>
        <li class="profesional-Art-li">bootstrap</li>
        <li class="profesional-Art-li">Ruby</li>
      </ul>
    </div>
    <div class="heading-btn"><a href="#2" id="four" class="profesional-Art-btm cards  button">See Project</a></div>
  </div>
</div>
<div class="art-container">
  <div class="heading">
    <div class="heading-body">
      <p class="profesional-Art-heading">
        Profesional Art Printing Data
      </p>
      <p class="profesional-Art-content">
        A daily
        selection of privately personalized reads;
        no accounts or sign-ups required. has been the
        industry's standard
      </p>
      <ul class="profesional-Art-ul">
        <li class="profesional-Art-li">html</li>
        <li class="profesional-Art-li">bootstrap</li>
        <li class="profesional-Art-li">Ruby</li>
      </ul>
    </div>
    <div class="heading-btn"><a href="#2" id="five" class="profesional-Art-btm cards  button">See Project</a></div>
  </div>
  <div class="heading flex2">
    <div class="heading-body">
      <p class="profesional-Art-heading">
        Data Dashboard Healthcare
      </p>
      <p class="profesional-Art-content">
        A daily
        selection of privately personalized reads;
        no accounts or sign-ups required. has been the
        industry's standard
      </p>
      <ul class="profesional-Art-ul">
        <li class="profesional-Art-li">html</li>
        <li class="profesional-Art-li">bootstrap</li>
        <li class="profesional-Art-li">Ruby</li>
      </ul>
    </div>
    <div class="heading-btn">
      <a href="#2" id="six" class="profesional-Art-btm cards  button">See Project</a>
    </div>
  </div>
  <div class="heading flex3">
    <div class="heading-body">
      <p class="profesional-Art-heading">
        Data Dashboard Healthcare
      </p>
      <p class="profesional-Art-content">
        A daily
        selection of privately personalized reads;
        no accounts or sign-ups required. has been the
        industry's standard
      </p>
      <ul class="profesional-Art-ul">
        <li class="profesional-Art-li">html</li>
        <li class="profesional-Art-li">bootstrap</li>
        <li class="profesional-Art-li">Ruby</li>
      </ul>
    </div>
    <div class="heading-btn"><a href="#2" id="seven" class="profesional-Art-btm cards  button">See Project</a></div>
  </div>
</div>
  `;
}
populateProjets();

const cardBtn = document.querySelectorAll('.cards');
cardBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const btnId = btn.getAttribute('id');
    displayPopup(btnId);
    const closePopupBtn = document.querySelector('.exit');
    closePopupBtn.addEventListener('click', () => {
      popupContainer.innerHTML = '';
    });
  });
});

// FORM VALIDATION-------------------
const form = document.getElementById('getintouch');
const error = document.getElementById('error');
const { email } = form.elements;

function checkUppercase(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)) {
      return true;
    }
  }
  return false;
}

email.addEventListener('click', () => {
  error.classList.remove('active');
  email.classList.remove('active');
});

form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  if (checkUppercase(emailValue)) {
    event.preventDefault();
    error.innerHTML = 'please provide a valid email in format: email@email.com';
    error.classList.add('active');
    email.classList.add('active');
  } else {
    form.submit();
  }
});

// local storage .........
const contactForm = document.querySelector('.form');
const contactEmailField = document.getElementById('email');
const contactUsernameField = document.getElementById('name');
const contactMessageField = document.getElementById('textarea');

contactForm.addEventListener('input', () => {
  const username = contactUsernameField.value;
  const email = contactEmailField.value;
  const message = contactMessageField.value;
  localStorage.setItem('contact-form', JSON.stringify({ username, email, message }));
});

window.addEventListener('load', () => {
  const isDataExist = JSON.parse(localStorage.getItem('contact-form'));

  if (!isDataExist) return;

  contactUsernameField.value = isDataExist.username;
  contactEmailField.value = isDataExist.email;
  contactMessageField.value = isDataExist.message;
});