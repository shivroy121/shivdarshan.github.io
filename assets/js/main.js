/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const home = document.getElementById('home').offsetTop;
const about = document.getElementById('about').offsetTop;
const skills = document.getElementById('skills').offsetTop;
const projects = document.getElementById('work').offsetTop;
const award = document.getElementById('award').offsetTop;
const contact = document.getElementById('contact').offsetTop;

/* UPDATE NAV WITH SCROLL*/
document.addEventListener('scroll', function(e){

    if(window.scrollY >= home && window.scrollY < about){
        navLink.forEach(n => n.classList.remove('active'));
        navLink[0].classList.add('active');
    }
    if(window.scrollY >= about && window.scrollY < skills){
        navLink.forEach(n => n.classList.remove('active'));
        navLink[1].classList.add('active');
    }
    if(window.scrollY >= skills && window.scrollY < projects){
        navLink.forEach(n => n.classList.remove('active'));
        navLink[2].classList.add('active');
    }
	if(window.scrollY >= projects && window.scrollY < award){
        navLink.forEach(n => n.classList.remove('active'));
        navLink[3].classList.add('active');
    }
    if(window.scrollY >= award && window.scrollY < contact - 200){
        navLink.forEach(n => n.classList.remove('active'));
        navLink[4].classList.add('active');
    }
    if(window.scrollY >= contact - 200){
        navLink.forEach(n => n.classList.remove('active'));
        navLink[5].classList.add('active');
    }
});


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200, origin: 'left'}); 
sr.reveal('.skills_img',{delay: 600});





