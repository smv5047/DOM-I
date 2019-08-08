const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Img selectors and attribute updates
let logo = document.getElementById("logo-img");
logo.setAttribute('src', './img/logo.png')

let cta = document.querySelector('#cta-img');
cta.setAttribute('src', './img/header-img.png')

let midImage = document.querySelector('#middle-img')
midImage.setAttribute('src', './img/mid-page-accent.jpg')

//Nav Bar

let navLinks = document.querySelectorAll('nav a')
navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product";
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Contact";
navLinks.forEach(function(element) {
  element.style.color = "green"
})

let sampleNav1 = document.createElement('a')
sampleNav1.textContent = "Sample Nav 1"
sampleNav1.style.color = "green"

let sampleNav2 = document.createElement('a')
sampleNav2.textContent = "Sample Nav 2"
sampleNav2.style.color = "green"

let nav =document.querySelector('nav')
nav.appendChild(sampleNav1);
nav.prepend(sampleNav2);

navLinks.forEach(function(element) {
  element.style.color = "green"
})

//Header Section

let title = document.querySelector('.cta-text h1')
title.textContent = 'Dom Is Awesome';
title.setAttribute('text-align', 'center')

let button = document.querySelector('button')
button.textContent = 'Get Started';

button.addEventListener('click', () => {
  console.log('Clicked the Button')
  button.style.color= 'red'
  event.stopPropagation();
});

//Content


let topHeader = document.querySelectorAll('.text-content h4')
topHeader[0].textContent = 'FEATURES';
topHeader[1].textContent = 'ABOUT';
topHeader[2].textContent = 'SERVICES';
topHeader[3].textContent = 'PRODUCT';
topHeader[4].textContent = 'VISION';


let topParagraph = document.querySelectorAll('.text-content p')
topParagraph[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topParagraph[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topParagraph[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topParagraph[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topParagraph[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


//Contact

let contact = document.querySelector('.contact h4')
contact.textContent = 'CONTACT'

let contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = "123 Way 456 Street Somewhere, USA"
contactInfo[1].textContent = "1 (888) 888-8888"
contactInfo[2].textContent = "sales@greatidea.io"

//Footer

let footer = document.querySelector("footer p")
footer.textContent = "Copyright Great Idea! 2018"