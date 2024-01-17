const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const skills = ['Front-end Web Developer', 'UI/UX Designer'];
    let currentSkillIndex = 0;
    let currentCharIndex = 0;
    const skillElement = document.querySelector('.home__skill');
  
    function typeSkill() {
      if (currentSkillIndex < skills.length) {
        const currentSkill = skills[currentSkillIndex];
        const displayText = currentSkill.substring(0, currentCharIndex + 1);
        skillElement.textContent = displayText;
  
        if (currentCharIndex < currentSkill.length) {
          currentCharIndex++;
          setTimeout(typeSkill, 100);
        } else {
          setTimeout(eraseSkill, 1000);
        }
      } else {
        currentSkillIndex = 0;
        setTimeout(typeSkill, 1000);
      }
    }
  
    function eraseSkill() {
      if (currentCharIndex > 0) {
        const currentSkill = skills[currentSkillIndex];
        const displayText = currentSkill.substring(0, currentCharIndex - 1);
        skillElement.textContent = displayText;
        currentCharIndex--;
  
        setTimeout(eraseSkill, 50);
      } else {
        currentSkillIndex++;
        setTimeout(typeSkill, 500);
      }
    }
  
    setTimeout(typeSkill, 500);
  });
  

showMenu('nav-toggle','nav-menu')


// IMG
gsap.from('.home__img img', {opacity: 0, duration: 2, delay: 1, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 1, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 1, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 1.5, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 1.5, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.nav__social', {opacity: 0, duration: 3, delay: 2, y: 25, ease:'expo.out', stagger: .2})

gsap.from('.skills', {opacity: 0, duration: 3, delay: 2, y: 25, ease:'expo.out', stagger: .2})
gsap.from('.container-description', {opacity: 0, duration: 3, delay: 2, y: 25, ease:'expo.out', stagger: .2})


